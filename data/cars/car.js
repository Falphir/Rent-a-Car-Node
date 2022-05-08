//criar a lógica para armazenar os schemas dos cars
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Tags = new Schema({
    extras: [{ type: String, required: false }]
});


/* let CommentsSchema = new Schema({
    userId: { type: Number, required: true },
    username: { type: String, required: true },
    date: { type: Date, requiered: true },
    text: { type: String },
    rating: { type: Number }
}) */


//criar uma schema
let CarSchema = new Schema({
    image: { type: String, required: false },
    title: { type: String, required: true},
    description: { type: String, required: false },
    seats: { type: Number, required: false },
    miles: { type: Number, required: false },
    price: { type: Number, required: false, currency: "EUR" },
    typeTransmission: { type: String, required: false },
    carCategory: { type: String, required: false},
    location: { type: String, required: false},
    extras: [{ type: String, required: false }]
});

//criar um modelo para usar o schema
let Car = mongoose.model('Car', CarSchema);

//tornar isto disponível para os nossos users nas nossas node apps
module.exports = Car;
