//vai devolver sempre as ações q podemos fazer na BD

function RentService(RentModel) {
    let service = {
        create,
        findAll,
        findById,
        findByUserId,
        update,
        removeById,
        findByName
    };

    //criar rent
    function create(values, id) {

        let newRent = RentModel(values, id);

        return save(newRent);
    }


    //guardar rent
    function save(newRent) {
        return new Promise(function (resolve, reject) {

            //guardar
            newRent.save(function (err) {

                if (err) reject(err);

                resolve(newRent);
            });
        });
    }


    //procurar rent
    function findAll(pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            RentModel.find({}, {}, { skip, limit }, function (err, users) {

                if (err) reject(err);

                //objecto de todos os users
                resolve(users);
            });
        })

            .then(async (users) => {
                const totalUsers = await RentModel.count();

                return Promise.resolve({
                    rents: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }


    //procurar rent por id
    function findById(id) {
        return new Promise(function (resolve, reject) {
            RentModel.findById(id, function (err, user) {
                if (err) reject(err);

                //objecto de todos os users
                resolve(user);
            });
        });
    }


    //procurar rent por user id
    function findByUserId(idUser, pagination) {

        const { limit, skip } = pagination;

        return new Promise(function (resolve, reject) {

            RentModel.find({ idUser: idUser }, {}, { skip, limit }, function (err, user) {

                if (err) reject(err);

                resolve(user);
            })
                .sort('datePickUp') //ordenação crescente por date Check In
            //.skip(intPageNumber > 0 ? ((intPageNumber - 1) * intNPerPage) : 0)
            //.limit(intNPerPage);
        })

            .then(async (users) => {

                const totalUsers = await RentModel.count();

                return Promise.resolve({
                    rents: users,
                    pagination: {
                        pageSize: limit,
                        page: Math.floor(skip / limit),
                        hasMore: (skip + limit) < totalUsers,
                        total: totalUsers
                    }
                });
            });
    }


    //procurar rent por name
    function findByName(name) {
        return new Promise(function (resolve, reject) {

            RentModel.find({ name: new RegExp(name) }, function (err, users) {

                if (err) reject(err);

                resolve(users);
            });
        });
    }


    //atualizar rent
    function update(rentId, values) {
        return new Promise(function (resolve, reject) {

            RentModel.findByIdAndUpdate(rentId, values, function (err, user) {

                if (err) reject(err);

                resolve(user);
            });
        });
    }


    //remover rent pelo id
    function removeById(id) {
        return new Promise(function (resolve, reject) {

            //console.log(id);

            RentModel.findByIdAndRemove(id, function (err) {

                if (err) reject(err);

                resolve('Rent: ' + id + ' deleted Sucessfully!');
            });
        });

    }

    return service;
}

module.exports = RentService;