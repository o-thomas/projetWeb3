const mongoose = require('mongoose')

const Schema = mongoose.Schema




const gameSchema = new Schema({
    name: String,
    description: String,
    console: String,
    editeur: String,
    userId: String,
    picture:String
    



})
module.exports = mongoose.model('game', gameSchema, 'games') // (nom du model, nom du schema, nom de la collection de la bdd)