const Cars = require('./car');
const CarsService = require('./service');

const service = CarsService(Cars);

module.exports = service;