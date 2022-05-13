 const express = require('express');
const Rents = require('../data/rents');
const Cars = require('../data/cars');
const Users = require('../data/users');
const scopes = require('../data/users/scopes');
const pagination = require('../middleware/pagination');
const VerifyToken = require('../middleware/Token');
const cookieParser = require('cookie-parser');


function RentRouter() {

    let router = express();


    //camadas
    router.use(express.json({
        limit: '100mb'
    }
    ));

    router.use(express.urlencoded({
        limit: '100mb', extended: true
    }
    ));

    router.use(function (req, res, next) {
        var today = new Date();

        console.log('Time:', today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        next();
    });

    router.use(pagination);

    router.use(cookieParser());
    router.use(VerifyToken);
    //fim camadas



    //-------------------------------------------------------------------------------------------//
    //------------------------------------ADMIN EDITOR ROUTES------------------------------------//
    //------------------------------------------------------------------------------------------//

    router.route('/rents')
        //GET - findAll rents
        .get(Users.autorize([scopes['read-rents']]), function (req, res, next) {

            console.log('---|verify token|---');

            Rents.findAll(req.pagination)
                .then((responseServer) => {

                    console.log('---|all rents|---'); //retorna todos os rents

                    const response = {

                        auth: true,
                        ...responseServer
                    };

                    res.send(response);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    console.log(err);
                    next();
                });
        });


    router.route('/rents/:userId')
        //GET - findAll rents
        .get(Users.autorize([scopes['read-rent-client']]), function (req, res, next) {

            let idUser = req.params['userId'];
            let pageNumber = req.headers['page'];
            let nPerPage = req.headers['limit'];


            Rents.findByUserId(idUser, pageNumber, nPerPage)
                .then((rents) => {

                    console.log('---|all rents|---'); //retorna todos os rents
                    res.send(rents);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    console.log(err);
                    next();
                });
        })


    router.route('/rents/:rentId')
        //PUT - update rent by ID
        .put(Users.autorize([scopes['update-rent']]), function (req, res, next) {

            let rentId = req.params['rentId'];
            let body = req.body;


            Rents.update(rentId, body)
                .then((car) => {
                    console.log('---|update one rent by ID|---'); //altera dados do rent
                    res.status(200);
                    res.send(car);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    res.status(404);
                    next();
                });
        })

        //DELETE - delete car by ID
        .delete(Users.autorize([scopes['delete-rent']]), function (req, res, next) {

            let rentId = req.params['rentId'];

            Rents.removeById(rentId)
                .then(() => {
                    console.log("---|delete one rent by ID|---")
                    res.status(200);
                    res.send("Rent: " + rentId + " deleted successfully");
                    next();
                })

                .catch((err) => {
                    console.log('"---|error|---"');
                    res.status(404);
                    next();
                });
        });



    //--------------------------------------------------------------------------------------//
    //------------------------------------ADMIN EDTIOR USER ROUTES-------------------------//
    //------------------------------------------------------------------------------------//

    router.route('/rents/:carId')
        //POST - create rents
        .post(Users.autorize([scopes['create-rent']]), function (req, res, next) {

            console.log('---|create rent|---');

            let carId = req.params['carId'];
            let body = req.body;

            Rents.create(body, carId)
                .then((body) => {
                    //console.log('---|funciona|---');

                    console.log('---|save|---');
                    res.status(200);
                    res.send(body);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    err.status = err.status || 500;
                    res.status(401);
                    next();
                });
        });


    router.route('/rents/:rentId')
        //GET - findById rent
        .get(Users.autorize([scopes['detail-rent']]), function (req, res, next) {

            let rentId = req.params['rentId'];


            Rents.findById(rentId)
                .then((rent) => {
                    console.log('---|find one rent by ID|---'); //retorna o rent pelo Id
                    res.status(200);
                    res.send(rent);
                    next();
                })


                .catch((err) => {
                    console.log('---|error|---');
                    res.status(404);
                    next();
                });
        });



    //------------------------------------------------------------------------------------//
    //------------------------------------USER ROUTES------------------------------------//
    //----------------------------------------------------------------------------------//


    router.route('/user/rents/:idUser')
        //GET - findAll rents
        .get(Users.autorize([scopes['read-own-rents']]), function (req, res, next) {

            let idUser = req.params['idUser'];


            Rents.findByUserId(idUser, req.pagination)
                .then((responseServer) => {
                    console.log('---|MY RENTS|---'); //retorna a rent pelo Id

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })

                .catch((err) => {
                    console.log('"---|USER error|---"');
                    console.log(err);
                    next();
                });
        });


    return router;

}

module.exports = RentRouter; 