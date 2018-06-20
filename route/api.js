// si tu veux utiliser des image n'oublie pas l'url a inseré dans bdd = http://localhost:3000/static/image/nomdelimage.extension(jpg...)
const express = require('express')
const router = express.Router()
const User = require('../server/models/user')
const Game = require('../server/models/game')
const Console = require('../server/models/console')
const Badge = require('../server/models/badge')
const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/lsrapp"
const app = express()
const formidable = require('formidable')



mongoose.connect(db, err => {
    if (err) {
        console.error('erreur' + err)
    } else {
        console.log('conecté a mongodb')
    }
})


app.use('/static', express.static('./static'))

router.get('/', (req, res) => {
    res.send('from api route')
})

router.get('/users', (req, res, next) => {
    User.find(function (err, users) {
        if (err) return next(err);

        res.json(users);
    })
})

// User section *****************************************************************************

//register function
router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)

    user.save((err, registerUser) => {
        if (err) {
            console.log(error)
        } else {

            res.status(200).send(registerUser)
        }
    })
})
//end function


//function logout
router.post('/logout', (req, res) => {

    res.status(200).send(user)
})
// end function

//function login
router.get('/login', (req, res) => {
    console.log(req.query.token)
    User.findOne({ login: req.query.token }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send("login invalide")

            } else {
                if (req.query.pass != user.password) {
                    console.log(user.password)

                    res.status(401).send("mot de passe invalide")
                } else {
                    res.status(200).send(user)
                }
            }

        }
    })
})
//end function

//function 

router.delete('/deleteAccount', (req, res, next) => {
    User.remove({ _id: req.query.token }, function (err, user) {
        if (err) return next(err);
        if (user) {
            console.log(req.query.token)

        }
    })
})
// end function

//function update User
router.put('/updateUser', (req, res) => {


    console.log(req.query.token)
    User.find({ _id: req.query.token }).update(req.body).exec((error, user) => {
        res.status(200).send(user)

    })
})
//end function

// end user

// game section ****************************************************************************

// function to add game

router.post('/addgame', (req, res) => {
    console.log(req.body)
    let addgameData = req.body
    let game = new Game(addgameData)

    game.save((err, gameadd) => {
        if (err) {
            console.log(error)
        } else {

            res.status(200).send(game)
            console.log(game.userId)

        }
    })
})

//end function


//function to get game
router.get('/games', (req, res, next) => {



    console.log(req.query.token);
    Game.find({ userId: req.query.token }, function (err, games) {

        if (err) return next(err);

        if (games) {
            res.json(games);
            console.log(req.body.value);
        }
    });
})
//end function

//function to game 3 game for home page

router.get('/gameprofil', (req, res, next) => {



    console.log(req.query.token);
    Game.find({ userId: req.query.token }).limit(3).exec(function (err, games) {

        if (err) return next(err);

        if (games) {
            res.json(games);

        }
    });
})
//end function

//function to get usercurent

router.get('/username', (req, res) => {
    console.log(req.query.token)
    User.findOne({ _id: req.query.token }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            console.log(res)
            res.status(200).send(user)



        }
    })
})
//end function
//function to get one game by id
router.get('/gameDetail', (req, res) => {
    console.log(req.query.token)
    Game.findOne({ _id: req.query.gameId }, (error, game) => {
        if (error) {
            console.log(error)
        } else {
            console.log(res)
            res.status(200).send(game)



        }
    })
})
//end function

//function to update game

router.put('/updateGame', (req, res) => {

    console.log(req.body)
    console.log(req.query.id)
    Game.find({ _id: req.query.id }).update(req.body).exec((error, user) => {
        res.status(200).send(user)

    })
})
//end function

//function to filter Game

router.get('/gameFilter', (req, res, next) => {

    console.log(req.query.name);
    if (req.query.name != "" && req.query.console != "") {
        Game.find({ userId: req.query.id, name: req.query.name, console: req.query.console }, function (err, games) {

            if (err) return next(err);

            if (games) {
                res.json(games);
                console.log(req.body.value);
            }
        });
    } else if (req.query.name == "" && req.query.console != "") {
        Game.find({ userId: req.query.id, console: req.query.console }, function (err, games) {

            if (err) return next(err);

            if (games) {
                res.json(games);
                console.log(req.body.value);
            }
        });
    } else if (req.query.name != "" && req.query.console == "") {
        Game.find({ userId: req.query.id, name: req.query.name }, function (err, games) {

            if (err) return next(err);

            if (games) {
                res.json(games);
                console.log(req.body.value);
            }
        });
    } else {
        Game.find({ userId: req.query.id }, function (err, games) {

            if (err) return next(err);

            if (games) {
                res.json(games);
                console.log(req.body.value);
            }
        });
    }
})
//end function

//function to delete game

router.delete('/deleteGame', (req, res, next) => {
    Game.remove({ _id: req.query.remove }, function (err, game) {
        if (err) return next(err);
        if (game) {
            console.log(req.query.remove)

        }
    })
})
//end function
//END GAME SECTION *************************************************************************************

//CONSOLE SECTION*********************************************************************************


//function to add console 
router.post('/addconsole', (req, res) => {

    let addConsoleData = req.body
    let console = new Console(addConsoleData)

    console.save((err, consoleadd) => {
        if (err) {
            console.log(error)
        } else {

            res.status(200).send(console)


        }
    })
})
//end function

//function to add console

router.get('/consoles', (req, res, next) => {



    console.log(req.query.token);
    Console.find({ userId: req.query.token }, function (err, consoles) {

        if (err) return next(err);

        if (consoles) {
            res.json(consoles);
            console.log(req.body.value);
        }
    });
})
//end function
//function to get 3 console for home page
router.get('/consoleprofil', (req, res, next) => {

    console.log(req.query.token);
    Console.find({ userId: req.query.token }).limit(3).exec(function (err, consoles) {

        if (err) return next(err);

        if (consoles) {
            res.json(consoles);

        }
    });
})
//end function
//function to get one console

router.get('/consoleDetail', (req, res) => {
    console.log(req.query.consoleId)
    Console.findOne({ _id: req.query.consoleId }, (error, console) => {
        if (error) {

        } else {

            res.status(200).send(console)



        }
    })
})
//end function

router.get('/consoleFilter', (req, res, next) => {

    if (req.query.year != "" && req.query.constructor != "") {
        Console.find({ userId: req.query.id, year: req.query.year, fabricant: req.query.constructor }, function (err, consoles) {

            if (err) return next(err);

            if (consoles) {
                res.json(consoles);

            }
        });
    } else if (req.query.year == "" && req.query.constructor != "") {
        Console.find({ userId: req.query.id, fabricant: req.query.constructor }, function (err, consoles) {

            if (err) return next(err);

            if (consoles) {
                res.json(consoles);
                console.log(req.body.value);
            }
        });
    } else if (req.query.year != "" && req.query.constructor == "") {
        Console.find({ userId: req.query.id, year: req.query.year }, function (err, consoles) {

            if (err) return next(err);

            if (consoles) {
                res.json(consoles);
                console.log(req.body.value);
            }
        });
    } else {
        Console.find({ userId: req.query.id }, function (err, consoles) {

            if (err) return next(err);

            if (consoles) {
                res.json(consoles);
                console.log(req.body.value);
            }
        });
    }
})
//end function

// function to update console
router.put('/updateConsole', (req, res) => {


    Console.find({ _id: req.query.id }).update(req.body).exec((error, consoles) => {
        res.status(200).send(consoles)

    })
})
//end function

//function to delete console

router.delete('/deleteConsole', (req, res, next) => {
    Console.remove({ _id: req.query.remove }, function (err, consoles) {

        if (err) return next(err);
        if (consoles) {


        }
    })
})

module.exports = router







