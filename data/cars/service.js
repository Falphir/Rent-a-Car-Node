//vai devolver sempre as ações q podemos fazer na BD

const Car = require("./car");

function CarService(CarModel) {
    let service = {
        create,
        findAll,
        findById,
        update,
        removeById,
        findByTitle,
        findAllHighPrice,
        findAllLowPrice,
        findAllMoreStars,
        findAllLessStars,
        findAllMostRecent,
        findByTitleMostRecent,
        findByTitleLessStars,
        findByTitleMoreStars,
        findByTitleLowPrice,
        findByTitleHighPrice
    };


    //criar car
    function create(values) {
        let newCar = CarModel(values);
        return save(newCar); //guarda novo car
    }

    //guardar car
    function save(newCar) {
        return new Promise(function (resolve, reject) {

            //guardar
            newCar.save(function (err) {
                if (err) reject(err);

                resolve('Car created!');
            });
        });
    }

    //procurar car
    function findAll(pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({}, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            });
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car
    function findAllHighPrice(pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({}, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort({ 'price': -1 }); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car
    function findAllLowPrice(pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({}, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort('price'); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car
    function findAllMoreStars(pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({}, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort({ 'nStars': -1 }); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car
    function findAllLessStars(pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({}, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort({ 'nStars': 1 }); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car
    function findAllMostRecent(pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({}, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort({ '_id': -1 }); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car por id
    function findById(id, pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.findById(id, {}, { skip, limit }, function (err, user) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(user);
            });
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car por title (full search)
    function findByTitle(title, pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({ title: new RegExp(title, "i") }, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort({ '_id': 1 }); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car por title (full search)
    function findByTitleMostRecent(title, pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({ title: new RegExp(title) }, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort({ '_id': -1 }); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car por title (full search)
    function findByTitleLessStars(title, pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({ title: new RegExp(title) }, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort({ 'nStars': 1 }); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car por title (full search)
    function findByTitleMoreStars(title, pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({ title: new RegExp(title) }, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort({ 'nStars': -1 }); //ordenação crescente por price
        })
 
            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car por title (full search)
    function findByTitleLowPrice(title, pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({ title: new RegExp(title) }, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort('price'); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //procurar car por title (full search)
    function findByTitleHighPrice(title, pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            CarModel.find({ title: new RegExp(title) }, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            })
                .sort({ 'price': -1 }); //ordenação crescente por price
        })

            .then(async (users) => {

                const totalUsers = await CarModel.count();

                return Promise.resolve({
                    cars: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }

    //atualizar car
    function update(id, values) {
        return new Promise(function (resolve, reject) {

            //values - {title: quarto com vista mar} || {nAdult: 2} ... || {title: j, nAdult: 0} ...
            CarModel.findByIdAndUpdate(id, values, function (err, user) {
                if (err) reject(err);

                resolve(user);
            });
        });
    }

    //remover car pelo id
    function removeById(id) {
        return new Promise(function (resolve, reject) {

            console.log(id);

            CarModel.findByIdAndRemove(id, function (err) {


                if (err) reject(err);
                console.log(err);
                resolve();
            });
        });
    }

    return service;
}

module.exports = CarService;