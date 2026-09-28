/*
    Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
    This allows partial application, reusability, and cleaner composition in JavaScript.
    
    Concept: Currying transforms f(a, b, c) into f(a)(b)(c).
 */
function sumCurried(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(sumCurried(1)(2)(3));  // 6