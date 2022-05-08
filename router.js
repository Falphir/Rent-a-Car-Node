//router.js é a camada intermédia do rooms.js e o servidor

const express = require('express');
let CarAPI = require('./server/cars');
let AuthAPI = require('./server/auth');
let ReserveAPI = require('./server/reserves');

function initialize() {

    let api = express();

    api.use('/rent-a-car', CarAPI());
    api.use('/auth', AuthAPI());
    api.use('/reserve', ReserveAPI());

    return api;
}

module.exports = {
    initialize: initialize,
};