// function expression
var canada = () => {
    console.log('cold')
}


// function declaration
function india() {
    console.log(arguments); // 1
    console.log('warm')
}

// function invocation
// canada()
india()


/**
 * function expressions do not get hoisted
 * (do not get memorized)
 *
 * but function declarations do.
 *
 * 1. the arguments object is always there
 * in the new environment
 * but since no parameters, then it is empty: '{}'
 *
 */