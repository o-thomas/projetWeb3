
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan');
const PORT = 3000
const api = require('../route/api')
const app = express()
app.use(cors())

app.use(logger('dev'));
app.use(bodyParser.json())
app.use('/api', api)

app.get('/', function(req, res){
    res.send('salut serveur')
})

app.listen(PORT, function(){
    console.log("le serveur tourne sur localhost" + PORT)
})
