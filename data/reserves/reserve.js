//criar a lógica para armazenar os schemas dos reserves
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//criar um schema
let ReserveSchema = new Schema({
    datePickUp: { type: Date },
    dateReturn: { type: Date },
    PickUpLocation: { type: String },
    ReturnLocation: { type: String },
    idUser: { type: String },
    nameUser: { type: String },
    idCar: { type: String }
});

//criar um modelo para usar o schema
let Reserve = mongoose.model('Reserve', ReserveSchema);

//tornar isto disponível para os nossos users
module.exports = Reserve;

