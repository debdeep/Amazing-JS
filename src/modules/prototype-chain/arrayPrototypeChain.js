/*
    ➡ Chain: arr → Array.prototype → Object.prototype → null
*/
let arr = [];
arr.__proto__ === Array.prototype;
Array.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
