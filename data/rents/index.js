//criar a lógica para armazenar os controllers dos rents

const Rents = require('./rent');
const RentService = require('./service');

const service = RentService(Rents);


module.exports = service;