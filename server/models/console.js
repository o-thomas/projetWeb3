const mongoose = require('mongoose')

const Schema = mongoose.Schema




const consoleSchema = new Schema({
    name: String,
    description: String,
    fabricant: String,
    year: String,
    userId: String,
    picture:String
    



})
module.exports = mongoose.model('console', consoleSchema, 'consoles') // (nom du model, nom du schema, nom de la collection de la bdd)