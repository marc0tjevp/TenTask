const db = require('../db/db')
const auth = require('../auth/authentication')

module.exports = {

    login: function (request, response) {

        let username = request.body.username
        let password = request.body.password

        let query = {
            sql: 'SELECT userName, password FROM user WHERE userName = ?',
            values: [username],
            timeout: 3000
        }

        db.query(query, function (err, result, fields) {

            if (!result[0]) {
                response.status(401).json({
                    "msg": "User does not exist"
                })
                return
            }


            if (username == result[0].userName && password == result[0].password) {
                var token = auth.encodeToken(username)
                response.status(200).json({
                    "token": token
                })
            } else {
                response.status(401).json({
                    "msg": "Invalid credentials"
                })
            }

        })

    }

}