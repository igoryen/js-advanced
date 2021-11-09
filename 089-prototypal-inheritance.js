// 089-prototypal-inheritance.js
Date.prototype.lastYear =  function() {
    return this.getFullYear() - 1;
}

let alpha = new Date('1900-10-10').lastYear()
let beta = new Date().lastYear()

console.log(alpha)
console.log(beta)

// ======================

Array.prototype.map = function() {
    let gamma = []
    for (let index = 0; index < this.length; index++) {
        gamma.push((this[index] + "##"))        
    }
    return gamma
}

console.log([1,2,3].map())