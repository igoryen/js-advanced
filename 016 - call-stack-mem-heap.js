const number = 610;
const string = '610'; // string six one zero
const human = {
    first: 'Igor',
    last: 'Entaltsev'
}

// number string human - will get mem space allocated by engine

function subtractTwo(num) {
    return num - 2;
}


function calculate() {
    const sumTotal = 4 + 5;
    return sumTotal;
}

calculate(); // can run this in Chrome > Sources > Snippets
calculate();

// when the ... gets to this line in file
// this function will be placed on a call stack
// a stack of calls
// and remove it after it's called