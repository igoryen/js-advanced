// function expression
var canada = () => {
    console.log('cold')
}


// function declaration
function india() {
    console.log('warm')
}

// function invocation
canada()
india()

function marry(person1, person2) {
    console.log("m1", arguments);
    console.log("m1", Array.from(arguments)); // 1
    return `${person1} is now married to ${person2}`
}

function marry2(...args) {
    console.log("m2", args);
    console.log("m2", Array.from(arguments)); // 1
    return `${args[0]} is now married to ${args[0]}`
}

marry2('Tim', 'Tina');

/**
 * function expressions do not get hoisted
 * (do not get memorized)
 *
 * but function declarations do.
 *
 * 1. [ 'Tim', 'Tina' ]
 */