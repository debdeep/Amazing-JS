Array.prototype.myReduce = function (fn, initialValue) {
    if (typeof fn !== "function") {
        throw new TypeError(fn + " is not a function");
    }

    let accumulator = initialValue;
    let startIndex = 0;

    // If no initialValue is provided, use the first element as accumulator and start adding that from next element which is index 1
    if (accumulator === undefined) {
        console.log("accumulator not defined");
        if (this.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = fn.call(undefined, accumulator, this[i], i, this);
    }

    return accumulator;
};


const numbers = [5, 12, 8, 130];

const result = numbers.myReduce((acc, curr) => acc + curr);
console.log(result); //150

