
/*
   ➡ Chain: obj → Object.prototype → null
*/
let myObj = {}
console.log(myObj.__proto__.__proto__)
console.log(myObj.__proto__.__proto__.__proto__)


// myObj.__proto__ → Object.prototype
// myObj.__proto__.__proto__ → null
// Accessing further (.__proto__ of null) → runtime error