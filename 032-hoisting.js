console.log('1-------');
console.log(teddy); // 1
console.log(sing()); // 2
var teddy = 'bear';

function sing() {
    console.log("oh lala la");
}

/**
 * 1. Error: 'undefined'. There is already a memory area with variable 'teddy'
 *  whose value is the temporary 'undefined'
 * 2. returns 'oh lala la' and undefined. Undefined is the retval of the f-object.
 *
 */