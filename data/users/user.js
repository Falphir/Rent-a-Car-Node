let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const scopes = require('./scopes');

let RoleSchema = new Schema({
    nameRole: { type: String },
    scopes: [{
        type: String, enum:
            [
                scopes["read-own-rents"], scopes["update-own-rent"], scopes["read-users"],
                scopes["update-rent"], scopes["read-rents"], scopes["delete-rent"],
                scopes["create-car"], scopes["update-car"], scopes["read-rent-client"],
                scopes["delete-car"], scopes["create-rent"], scopes["detail-rent"], scopes["verify-logged-in"],
                scopes["delete-user"], scopes["create-favorite"], scopes["read-own-favorites"], scopes["delete-favorite"], scopes["create-comment"]
            ],
    }]
});


//create a schema
let UserSchema = new Schema({
    avatar: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: RoleSchema }
});


let User = mongoose.model('User', UserSchema);
module.exports = User;
