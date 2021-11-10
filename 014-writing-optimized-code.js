// hidden classes
function Animal(x,y) { // 3
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

obj1.a = 30;
obj1.b = 100;

// 2
obj2.b = 30;
obj2.a = 100;

// 2: these 2 lines will deoptimize the code
// i.e. make the compiler run slower
// Why? Because the order of assignment is not as before
// not obj2.a and then obj2.b
// but obj2.b and then obj2.a
// The assignment order should go as in #3

delete obj1.x = 30; // 4 
// 4: this also breaks the hidden classes and 
// deoptimizes the code

// inline caching

function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`; // 1
}

const userData {
    firstName: 'Igor',
    lastName: 'Entaltsev'
}

findUser(userData);

// 1. when calling multiple times
// the compiler replaces the object
// with a string:
// return `found Igor Entaltsev`;
// Inline Caching
