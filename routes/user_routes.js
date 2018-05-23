const express = require('express')
const controller = require('../controller/user_controller')
const routes = express.Router()

routes.post('/login', controller.login)

module.exports = routes