/*
    Function declaration is one of the way in which a function can be declared/defined in javascript which is fully hoisted,
    means a function declaration/definition can be called before it's defined due to hoisting.

    Name: Must have a name
    Usage: Reusable functions
*/

console.log(add(5, 10)); // 15

function add(a, b) {
    return a + b;
}
// console.log(add(5, 10)); // 15  - > both type of calling will work.