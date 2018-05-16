/*jshint esversion: 6 */

var db = require('./db.js');

module.exports.handleSighnup = (email, password) => {
    db.saveUser({
        email,
        password
    });
};