const moment = require('moment');
const jwt = require('jwt-simple');

const config = require('../config/config.json')

function encodeToken(userID) {
    const playload = {
        iat: moment().unix(),
        sub: userID
    };
    return jwt.encode(playload, config.secret);
}

function decodeToken(token, cb) {

    try {
        return jwt.decode(token, config.secret)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    encodeToken,
    decodeToken
};