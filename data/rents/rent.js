//criar a lógica para armazenar os schemas dos rents
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//criar um schema
let RentSchema = new Schema({
    datePickUp: { type: Date },
    dateReturn: { type: Date },
    pickUpLocation: { type: String },
    returnLocation: { type: String },
    idUser: { type: String },
    nameUser: { type: String },
    idCar: { type: String }
});

//criar um modelo para usar o schema
let Rent = mongoose.model('Rent', RentSchema);

//tornar isto disponível para os nossos users
module.exports = Rent;

