/*jshint esversion: 6 */

const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33,11);
    expect(res).toBe(44);
    expect(typeof res).toBe('number');
});

it('should add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        expect(typeof sum).toBe('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(11);
    expect(res).toBe(121);
    expect(typeof res).toBe('number');
});

it('should square a number', (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9);
        expect(typeof square).toBe('number');
        done();
    });
});

// it ('should be full name', () => {
//     var user = {location: 'Utah', age: 27};
//     var res = utils.setName(user, 'Kyle Archer');

//     expect(res.toObject().tokens[0]).toMatchObject({
//         firstName: 'Kyle',
//         lastName: 'Archer'
//     });
// });