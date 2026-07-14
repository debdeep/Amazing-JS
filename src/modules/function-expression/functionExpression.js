/*
    Function Expression is one of the way in which a function can be declared/defined in javascript which is partially hoisted,
    means the variable storing the expression is hoisted not the the function body / definition.

    Name: Can be anonymous or named
    Usage: Callbacks, closures, inline
*/

console.log(add(5, 10)); // Uncaught ReferenceError: Cannot access 'add' before initialization

const add = function (a, b) {
    return a + b;
}
// console.log(add(5, 10)); // 15 