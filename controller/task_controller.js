const db = require('../db/db')

module.exports = {

    addTask: function (request, response) {

        const body = request.body

        let taskName = body.taskName
        let taskDate = body.taskDate
        let taskStatus = body.taskStatus
        let taskUser = body.taskUser

        let query = {
            sql: 'INSERT INTO task(taskName, taskDate, taskStatus, taskUser) VALUES(?, ?, ?, ?)',
            values: [taskName, taskDate, taskStatus, taskUser],
            timeout: 3000
        }

        db.query(query, function (err, result, fields) {
            if (err) {
                response.status(500).json({
                    "msg": err,
                })
            }
            response.status(200).json(result)
        })

    },

    getTaskByID: function (request, response) {

        let id = request.params.id

        let query = {
            sql: 'SELECT * FROM task WHERE taskID = ?',
            values: [id],
            timeout: 3000
        }

        db.query(query, function (err, result, fields) {
            if (err) {
                response.status(500).json({
                    "msg": err,
                })
            }
            response.status(200).json(result)
        })
    },

    getTasksByDate: function (request, response) {

        let date = request.params.date

        let query = {
            sql: 'SELECT * FROM task WHERE taskDate = ?',
            values: [date],
            timeout: 3000
        }

        db.query(query, function (err, result, fields) {
            if (err) {
                response.status(500).json({
                    "msg": err,
                })
            }
            response.status(200).json(result)
        })

    },

    getTasksByUser: function (request, response) {

        let id = request.params.user

        let query = {
            sql: 'SELECT * FROM task WHERE taskUser = ?',
            values: [id],
            timeout: 3000
        }

        db.query(query, function (err, result, fields) {
            if (err) {
                response.status(500).json({
                    "msg": err,
                })
            }
            response.status(200).json(result)
        })

    },

    getTasksByUserAndDate: function (request, response) {

        let id = request.params.user
        let date = request.params.date

        let query = {
            sql: 'SELECT * FROM task WHERE taskUser = ? AND taskDate = ?',
            values: [id, date],
            timeout: 3000
        }

        db.query(query, function (err, result, fields) {
            if (err) {
                response.status(500).json({
                    "msg": err,
                })
            }
            response.status(200).json(result)
        })

    },

    editTask: function (request, response) {

        const body = request.body

        let taskID = request.params.id
        let taskName = body.taskName
        let taskDate = body.taskDate
        let taskStatus = body.taskStatus
        let taskUser = body.taskUser

        let queryUpdate = {
            sql: 'UPDATE task SET taskName = ?, taskDate = ?, taskStatus = ?, taskUser = ? WHERE taskID = ?',
            values: [taskName, taskDate, taskStatus, taskUser, taskID],
            timeout: 3000
        }

        db.query(queryUpdate, function (err, result, fields) {
            if (err) {
                response.status(500).json({
                    "msg": err,
                })
            }
            response.status(200).json(result)
        })
    },

    deleteTask: function (request, response) {

        let id = request.params.id

        let query = {
            sql: 'DELETE FROM task WHERE taskID = ?',
            values: [id],
            timeout: 3000
        }

        db.query(query, function (err, result, fields) {
            if (err) {
                response.status(500).json({
                    "msg": err,
                })
            }
            response.status(200).json(result)
        })
    }

}