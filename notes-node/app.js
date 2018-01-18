/*jshint esversion: 6 */

console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

var filteredArray = _.uniq(['kyle', 'kyle', 1, 2, 3, 4, 1]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('kyle'));

// console.log('Result:', notes.add(9, -2));

// var user = os.userInfo();

// fs.appendFile('greatings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err) {
//     if (err) {
//         console.log("Unable to write to file");
//     }
// });