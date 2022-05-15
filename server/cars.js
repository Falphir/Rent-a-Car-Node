const express = require('express');
const Cars = require('../data/cars');
const Users = require('../data/users');
const scopes = require('../data/users/scopes');
const User = require('../data/users/user');
const pagination = require('../middleware/pagination');
const fileUpload = require('express-fileupload');
const VerifyToken = require('../middleware/Token');
const cookieParser = require('cookie-parser');


function CarRouter() {

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
    //fim camadas    


    //-------------------------------------------------------------------------------------//
    //------------------------------------EDITOR ROUTES-----------------------------------//
    //-----------------------------------------------------------------------------------//

    //-------------------------------------------------------------------------------------//
    //------------------------------------USER ROUTES------------------------------------ //
    //-----------------------------------------------------------------------------------//

    //?page=1&limit=1

    //-------------------------------------------------------------------------------------//
    //------------------------------------ALL ROUTES--------------------------------------//
    //-----------------------------------------------------------------------------------//

    router.route('/cars')
        //GET - findAll cars
        .get(function (req, res, next) {

            Cars.findAll(req.pagination)
                .then((responseServer) => {
                    console.log('---|all cars|---'); //retorna todos os cars

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    next();
                });
        })


    router.route('/cars/mostrecent')
        //GET - findAll cars
        .get(function (req, res, next) {

            Cars.findAllMostRecent(req.pagination)
                .then((responseServer) => {
                    console.log('---|all cars|---'); //retorna todos os cars

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    next();
                });
        })


    router.route('/cars/lowprice')
        //GET - findAll cars
        .get(function (req, res, next) {

            Cars.findAllLowPrice(req.pagination)
                .then((responseServer) => {
                    console.log('---|all cars|---'); //retorna todos os cars

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    next();
                });
        })


    router.route('/cars/highprice')
        //GET - findAll cars
        .get(function (req, res, next) {

            Cars.findAllHighPrice(req.pagination)
                .then((responseServer) => {
                    console.log('---|all cars|---'); //retorna todos os cars

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    next();
                });
        })


    router.route('/cars/morestars')
        //GET - findAll cars
        .get(function (req, res, next) {

            Cars.findAllMoreStars(req.pagination)
                .then((responseServer) => {
                    console.log('---|all cars|---'); //retorna todos os cars

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    next();
                });
        })


    router.route('/cars/lessstars')
        //GET - findAll cars
        .get(function (req, res, next) {

            Cars.findAllLessStars(req.pagination)
                .then((responseServer) => {
                    console.log('---|all cars|---'); //retorna todos os cars

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    next();
                });
        })


    router.route('/cars/:carId')
        //GET - findById car
        .get(function (req, res, next) {
            let carId = req.params['carId'];

            Cars.findById(carId, req.pagination)
                .then((responseServer) => {
                    console.log('---| find one car by ID|---'); //retorna o car pelo Id

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })

                .catch((err) => {
                    console.log('"---| error|---"');
                    res.status(404);
                    next();
                });
        })

    router.route('/cars/:title')
        //GET - findByTitle car
        .get(function (req, res, next) {

            let title = req.params['title'];


            Cars.findByTitle(title, req.pagination)
                .then((responseServer) => {
                    console.log('---|find car by title|---'); //retorna o car pelo Id

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })


                .catch((err) => {
                    console.log('---|error|---');
                    console.log(err);
                    res.status(404);
                    next();
                });
        })


    router.route('/cars/:title/mostrecent')
        //GET - findByTitle car
        .get(function (req, res, next) {

            let title = req.params['title'];


            Cars.findByTitleMostRecent(title, req.pagination)
                .then((responseServer) => {
                    console.log('---|find car by title|---'); //retorna o car pelo Id

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })


                .catch((err) => {
                    console.log('---|error|---');
                    console.log(err);
                    res.status(404);
                    next();
                });
        })


    router.route('/cars/:title/lessstars')
        //GET - findByTitle car
        .get(function (req, res, next) {

            let title = req.params['title'];


            Cars.findByTitleLessStars(title, req.pagination)
                .then((responseServer) => {
                    console.log('---|find car by title|---'); //retorna o car pelo Id

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })


                .catch((err) => {
                    console.log('---|error|---');
                    console.log(err);
                    res.status(404);
                    next();
                });
        })


    router.route('/cars/:title/morestars')
        //GET - findByTitle car
        .get(function (req, res, next) {

            let title = req.params['title'];


            Cars.findByTitleMoreStars(title, req.pagination)
                .then((responseServer) => {
                    console.log('---|find car by title|---'); //retorna o car pelo Id

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })


                .catch((err) => {
                    console.log('---|error|---');
                    console.log(err);
                    res.status(404);
                    next();
                });
        })


    router.route('/cars/:title/lowprice')
        //GET - findByTitle car
        .get(function (req, res, next) {

            let title = req.params['title'];


            Cars.findByTitleLowPrice(title, req.pagination)
                .then((responseServer) => {
                    console.log('---|find car by title|---'); //retorna o car pelo Id

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })


                .catch((err) => {
                    console.log('---|error|---');
                    console.log(err);
                    res.status(404);
                    next();
                });
        })


    router.route('/cars/:title/highprice')
        //GET - findByTitle car
        .get(function (req, res, next) {

            let title = req.params['title'];


            Cars.findByTitleHighPrice(title, req.pagination)
                .then((responseServer) => {
                    console.log('---|find car by title|---'); //retorna o car pelo Id

                    const response = { auth: true, ...responseServer };

                    res.send(response);
                    next();
                })


                .catch((err) => {
                    console.log('---|error|---');
                    console.log(err);
                    res.status(404);
                    next();
                });
        })





    //-------------------------------------------------------------------------------------------//
    //------------------------------------ADMIN EDITOR ROUTES------------------------------------//
    //------------------------------------------------------------------------------------------//

    router.use(cookieParser());
    router.use(VerifyToken);

    router.route('/cars')
        //POST - create cars
        .post(Users.autorize([scopes['create-car']]), function (req, res, next) {

            console.log('---|create car|---');

            let body = req.body;

            Cars.create(body)
                .then(() => {
                    console.log('save');
                    res.status(200);
                    res.send(body);
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    console.log(err);
                    err.status = err.status || 500;
                    res.status(401);
                    next();
                });
        });


    router.route('/cars/:carId')
        //PUT - update car by ID
        .put(Users.autorize([scopes['update-car']]), function (req, res, next) {

            let carId = req.params['carId'];
            let body = req.body;


            Cars.update(carId, body)
                .then((car) => {
                    console.log('---|update one car by ID|---'); //altera dados do car
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
        .delete(Users.autorize([scopes['delete-car']]), function (req, res, next) {

            console.log("---|delete one car by ID|---")

            let carId = req.params['carId'];


            Cars.removeById(carId)
                .then(() => {
                    console.log('delete');
                    res.status(200);
                    res.send("Delete Sucessfull")
                    next();
                })

                .catch((err) => {
                    console.log('---|error|---');
                    res.status(404);
                    next();
                });
        });


    return router;
}

module.exports = CarRouter;