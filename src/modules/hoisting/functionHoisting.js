/* 
    In JavaScript, normal function declarations are hoisted to the top of their scope and can be called before they are defined.
    In the below example, the function 'printMessage' is called before its declaration, but it works because of hoisting.
    Function hoisting allows you to use functions before they are defined in the code, which can be useful in certain situations.

    TIPS: However, it's important to note that function expressions (where a function is assigned to a variable) are not hoisted in the same way.
    In case of function expressions, the variable is hoisted but not the function definition, which can lead to a ReferenceError if you try to call the function before it is defined.
*/
printMessage(); // Output: This is a hoisted function.

function printMessage() {
    console.log("This is a hoisted function.");
}

/* 
    Function Expression Example 
*/
//functionExpression(); // Output: ReferenceError: Cannot access 'functionExpression' before initialization
const functionExpression = function () {
    console.log("This is a function expression.");
}
functionExpression(); // Output: This is a function expression.