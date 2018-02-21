/*jshint esversion: 6 */

const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/abb9baa14155cd2533c6f4a053272d92/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to dark sky servers');
        } else if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });  
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;