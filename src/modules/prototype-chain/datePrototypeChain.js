/*
   ➡ Chain: d → Date.prototype → Object.prototype → null
*/

let d = new Date();
d.__proto__ === Date.prototype;
Date.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
