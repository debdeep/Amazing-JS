/*
    Rest operator is a special type of operator which helps to Pack Items into an array in a new manner rather than
    a traditional way to execute js expressions. It came with ES6.

    Both operators use the same ... syntax, but context matters:
        In function parameters → it’s Rest.
        In array/object literals → it’s Spread.

    Analogy- Rest → Like packing leftover items into a bag.
*/

function addItems(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}
console.log(addItems(1, 2, 3, 4, 5)); // 15