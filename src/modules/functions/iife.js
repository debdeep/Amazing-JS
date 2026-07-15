/*
    IIFE or known as immediately invoked function expression is considered as a one of the way to self call the function immediately.
    An IIFE is a function expression that runs immediately after it’s defined, mainly used to create a private scope and avoid polluting the global namespace.
    
    Analogy:  Need to wrap the function in parentheses to turn it into a function expression
*/

(function print() {
    console.log("Hello!");
})();