// Require
const express = require('express')
const app = express()
const createError = require('http-errors')
const bodyParser = require('body-parser')
const expressJWT = require('express-jwt')

// Config
const db = require('./db/db')
const config = require('./config/config.json')

// Body Parser
app.use(bodyParser.urlencoded({
    'extended': 'true'
}))

app.use(bodyParser.json())

app.use(expressJWT({
    secret: config.secret
}).unless({
    path: ['/auth/login']
}))

// Routes
const task_routes = require('./routes/task_routes')
const user_routes = require('./routes/user_routes')

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use('/task', task_routes)
app.use('/auth', user_routes)

app.use(function (error, request, response, next) {
    if (error.name === 'UnauthorizedError') {
        response.status(401).send({
            "msg": "No or invalid credentials"
        })
    }
})

app.use('*', function (req, res) {
    res.status('404').end()
})

var server = app.listen(8080, function () {
    console.log("Listening on port " + server.address().port)
})