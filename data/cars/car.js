//criar a lógica para armazenar os schemas dos cars
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Tags = new Schema({
    extras: [{ type: String, required: false }]
});

//criar uma schema
let CarSchema = new Schema({
    image: { type: String, required: false },
    title: { type: String, required: true},
    description: { type: String, required: false },
    seats: { type: Number, required: false },
    kilometers: { type: Number, required: false },
    price: { type: Number, required: false, currency: "EUR" },
    typeTransmission: { type: String, required: false, enum: ["Manual", "Automatic"] },
    carCategory: { type: String, required: false, enum: ["Small", "Medium", "Large"]},
    location: { type: String, required: false},
    extras: [{ type: String, required: false }]
});

//criar um modelo para usar o schema
let Car = mongoose.model('Car', CarSchema);

//tornar isto disponível para os nossos users nas nossas node apps
module.exports = Car;
