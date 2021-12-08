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
    console.log(arguments);
    return `${person1} is now married to ${person2}`
}

marry('Tim', 'Tina');

/**
 * function expressions do not get hoisted
 * (do not get memorized)
 *
 * but function declarations do.
 */