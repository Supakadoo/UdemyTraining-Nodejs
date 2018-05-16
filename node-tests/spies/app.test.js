/*jshint esversion: 6 */

const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    // var db = {
    //     saveUser: expect.createSpy()
    // };
    // app.__set__('db', db);

    // it('Should call the spy correctly', () => {
    //     // var spy = expect.createSpy();
    //     // spy('Kyle', 27);
    //     // expect(spy).toHaveBeenCalled();
    //     // expect(spy).toHaveBeenCalledWith('Kyle', 27);
    // });

    // it('Should call save user with user object', () => {
    //     var email = 'kyle@example.com';
    //     var password = '123';

    //     app.handleSighnup(email, password);
    //     expect(db.saveUser).toHaveBeenCalledWith({email, password});
    // });
});