console.log('1-------');
console.log(teddy); // 1
console.log(sing()); // 2, 3
console.log(sing2); // 6
let teddy = 'bear'; // 4

// function expression
var sing2 = function () { // 5
    console.log("uhh la la");
}

// function declaration
function sing() {
    console.log("oh lala la");
}

/**
 * 1. Error: 'undefined'. There is already a memory area with variable 'teddy'
 *  whose value is the temporary 'undefined'
 * 2. returns 'oh lala la' and undefined. Undefined is the retval of the f-object.
 * 3. If f-object sing() is parenthesized, then, during phase 1 (creation),
 *  the engine does not see keyword 'function'
 *  therefore the engine does not allocate memory for the f-object
 *  i.e. it does not hoist it.
 *  Therefore, the error here is 'Reference error: sing is not defined'
 * 4. The error here is 'ReferenceError: teddy is not defined',
 *  because the variable is declared using other word than 'var'
 *  and therefore the engine does not hoist variable 'teddy' either.
 * 5. The engine, during phase 1, will hoist variable 'sing2'
 *  without its value, and assign it value 'undefined'.
 * 6. The error here will be 'TypeError: sing2 is not a function'
 *  because during the creation phase, memory was allocated for only the name of the variable,
 *  so when the <who?> sees the variable name with a pair of round brackets
 *  it is confused, You are trying to invoke something that is not a function.
 *  But if you move the invocation of f-object sing2 below the expression,
 *  then there is no mistake: during phase 1, the engine allocates memory for variable 'sing2'
 *  and during phase 2, it (a) fills it with its f-object value and (b) invokes it.
 */