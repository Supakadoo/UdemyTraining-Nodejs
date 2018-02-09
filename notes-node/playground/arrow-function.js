/*jshint esversion: 6 */

// var square = (x) => {
//     var result = x*x;
//     return result;
// };
var square = x => x*x;

console.log(square(9));

var user = {
    name: 'Kyle',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi I'm ${this.name}`);
    }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);