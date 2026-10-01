if (Number.isNaN) {
    Number.isNaN = function (arg) {
        return typeof arg === "number" && isNaN(arg)
    }
}

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN("hello"));   // false
console.log(Number.isNaN(undefined)); // false