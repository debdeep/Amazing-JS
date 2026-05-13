/* 
    In JavaScript, variables declared with 'const' are hoisted to the top of their scope, 
    but they are not initialized until their definition is evaluated. This means that you cannot access a 'const' variable before it is declared,
    and trying to do so will result in a ReferenceError. Additionally, once a 'const' variable is assigned a value,
    it cannot be reassigned, which will lead to a TypeError if you attempt to change its value.
*/
console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a = 10;
console.log(a);
a = 20; // TypeError: Assignment to constant variable.