/*
    ➡ Chain: fn → Function.prototype → Object.prototype → null
*/
function fn() { }
fn.__proto__ === Function.prototype;
Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
