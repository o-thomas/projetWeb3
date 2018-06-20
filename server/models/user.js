const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    login: String,
    password: String,
    firstname: String,
    name: String,
    gender: String,
    mail: String,



})
module.exports = mongoose.model('user', userSchema, 'users') // (nom du model, nom du schema, nom de la collection de la bdd)