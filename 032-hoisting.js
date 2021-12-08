console.log('1-------');
console.log(teddy); // 1
console.log(sing()); // 2, 3
var teddy = 'bear';

(function sing() {
    console.log("oh lala la");
})

/**
 * 1. Error: 'undefined'. There is already a memory area with variable 'teddy'
 *  whose value is the temporary 'undefined'
 * 2. returns 'oh lala la' and undefined. Undefined is the retval of the f-object.
 * 3. If f-object sing() is parenthesized, then, during phase 1 (creation),
 *  the engine does not see keyword 'function'
 *  therefore the engine does not allocate memory for the f-object
 *  i.e. it does not hoist it.
 *  Therefore, the error here is 'Reference error: sing is not defined'
 */