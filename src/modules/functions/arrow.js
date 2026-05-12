/*
    This is an example of an arrow function in JavaScript. They are often used for short functions or as callbacks.
    In this example, the arrow function simply logs a message to the console.

    Features of Arrow Functions:
    1. Concise Syntax: Arrow functions have a shorter syntax compared to traditional function expressions.
    2. Lexical 'this': Arrow functions do not have their own 'this' context; they inherit it from the parent scope.
    3. No 'arguments' Object: Arrow functions do not have their own 'arguments' object, but can access it from the parent scope.
    4. Cannot be used as constructors: Arrow functions cannot be used with the 'new' keyword to create instances.
    5. Arrow functions assigned to variables are not hoisted (they behave like const/let).

    IMPORTANT: No prototype property so can not be polyfilled. 
    Syntax: const fn = () => {}

 */

const arrow = () => {
    console.log("This is an arrow function.");
}
arrow(); // Output: This is an arrow function.
