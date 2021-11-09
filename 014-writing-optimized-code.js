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
