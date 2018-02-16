/*jshint esversion: 6 */

// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
// })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

// abb9baa14155cd2533c6f4a053272d92
// https://api.darksky.net/forecast/abb9baa14155cd2533c6f4a053272d92/40.3363082,-111.9880199

const request = require('request');

request({
    url: `https://api.darksky.net/forecast/abb9baa14155cd2533c6f4a053272d92/40.3363082,-111.9880199`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to dark sky servers');
    } else if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);   
    } else {
        console.log('Unable to fetch weather');
    }
});