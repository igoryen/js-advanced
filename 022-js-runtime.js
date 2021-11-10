// 022-js-runtime.js

console.log('1');
setTimeout( () => {console.log('2'), 1000});
console.log('3');

// the result is: 1,3,2