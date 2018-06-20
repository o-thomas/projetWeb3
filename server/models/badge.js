const mongoose = require('mongoose')

const Schema = mongoose.Schema




const badgeSchema = new Schema({
    name: String,
    raison: String,
    image: String,
    user: []
        



})
module.exports = mongoose.model('badges', badgeSchema, 'badges') // (nom du model, nom du schema, nom de la collection de la bdd)