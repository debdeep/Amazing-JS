/*
    A Pure function is a kind of function which always returns or produces the same output
    for the same set of inputs and has no side effects. It doesn't modify the state of the inputs/data addiitonally and 
    is a deterministic approach in programming.
*/

function pureAddition(a, b) {
    return a + b;
}

function pureSubstraction(a, b) {
    return a - b;
}

console.log(pureAddition(5, 5));
console.log(pureSubstraction(10, 5));
console.log(pureAddition(5, 5)); // produces same O/P for same set of I/P