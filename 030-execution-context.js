function printName() {
    return 'Igor Entaltsev';
}

function findName() {
    return printName();
}

function sayMyName() {
    return findName();
}

console.log(sayMyName());

// object is like a table
// window.a = 'teddy'
// it's like a two-column table called 'window'
// whose 2 columns are 'variable name' and 'variable value'
// when you create a new variable
// you create a new row in the table
// the cell in the 'variable name' column holds 'a'
// the cell in the 'variable value' column holds 'teddy'