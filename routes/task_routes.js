const express = require('express')
const controller = require('../controller/task_controller')
const routes = express.Router()

routes.get('/get/task/:id', controller.getTaskByID)
routes.get('/get/date/:date', controller.getTasksByDate)
routes.get('/get/user/:user', controller.getTasksByUser)
routes.get('/get/date/:date/user/:user', controller.getTasksByUserAndDate)
routes.post('/add', controller.addTask)
routes.put('/edit/:id', controller.editTask)
routes.delete('/delete/:id', controller.deleteTask)

module.exports = routes