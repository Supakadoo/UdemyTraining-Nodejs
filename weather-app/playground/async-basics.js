/*jshint esversion: 6 */

console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('No Delay');
}, 0);

console.log('Finishing up');