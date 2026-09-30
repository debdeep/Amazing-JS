if (!Array.isArray) {
    Array.isArray = function (arg) {
        // safest approach using Object.prototype.toString
        return Object.prototype.toString.call(arg) === "[object Array]";
    };
}

// alternate way
if (!Array.isArray) {
    Array.isArray = function (arg) {
        return arg && arg.constructor === Array;
    };
}

// using protype and assuming if argument is array it will have a push method 
if (!Array.isArray) {
    Array.isArray = function (arg) {
        return arg && typeof arg === "object" && arg.push === Array.prototype.push;
    };
}



const numbers_array = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers_array)); // true
console.log(Array.isArray(numbers_array)); // true

console.log(Array.isArray("hello"));       // false
console.log(Array.isArray({ a: 1 }));      // false
console.log(Array.isArray([]));            // true
console.log(Array.isArray(undefined));     // false
