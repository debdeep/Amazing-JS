/*
    Anonymous function in Javascript is a function that does not have any name associated with it. They are typically used as arguments to other functions or assigned to variables.
*/

// Anonymous function assigned to a variable
const greet = function () {
    console.log("Hello!");
};

// Anonymous function used as a callback
setTimeout(function () {
    console.log("Hello after 2 seconds!");
}, 2000);

// Arrow function (also anonymous)
const greet = () => {
    console.log("Hello!");
};
