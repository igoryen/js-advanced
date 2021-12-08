function printName() { // 1
    return 'Igor Entaltsev';
}

function findName() { // 1
    return printName();
}

function sayMyName() { // 1
    return findName();
}

console.log(window.sayMyName());

// object is like a table
// window.a = 'teddy'
// it's like a two-column table called 'window'
// whose 2 columns are 'variable name' and 'variable value'
// when you create a new variable
// you create a new row in the table
// the cell in the 'variable name' column holds 'a'
// the cell in the 'variable value' column holds 'teddy'

/**
 * 1. this functon is in the GLOBAL execution envitonment
 * they are the properties of the GLOBAL object
 *
 */

/**
 *
 */