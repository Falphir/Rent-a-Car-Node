//router.js é a camada intermédia do car.js e o servidor

const express = require('express');
let CarAPI = require('./server/cars');
let AuthAPI = require('./server/auth');
let RentAPI = require('./server/rents');

function initialize() {

    let api = express();

    api.use('/rent-a-car', CarAPI());
    api.use('/rent-a-car/auth', AuthAPI());
    api.use('/rent-a-car/rent', RentAPI());

    return api;
}

module.exports = {
    initialize: initialize,
};