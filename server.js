// Require
const express = require('express')
const app = express()
const createError = require('http-errors')
const bodyParser = require('body-parser')

// Database
const db = require('./db/db')

// Body Parser
app.use(bodyParser.urlencoded({
    'extended': 'true'
}))

app.use(bodyParser.json())

// Routes
const task_routes = require('./routes/task_routes')

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use('/task', task_routes)

var server = app.listen(8080, function () {
    console.log("Listening on port " + server.address().port)
})