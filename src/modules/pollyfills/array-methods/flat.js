Array.prototype.myFlat = function (depth = 1) {
    const result = [];

    function flatten(arr, currentDepth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && currentDepth < depth) {
                flatten(arr[i], currentDepth + 1);
            } else {
                result.push(arr[i]);
            }
        }
    }

    flatten(this, 0); // 👈 here `this` is the array you called `.myFlat()` on
    return result;
};

// Demo
const arr = [1, 2, 3, [5, 6, [7, 8]]];
const emptyArr = [];

console.log(arr.myFlat(Infinity)); // [1, 2, 3, 5, 6, 7, 8] -> flattens till Infinity depth.
console.log(arr.myFlat(1)); // [1, 2, 3, 5, 6, [7, 8]] -> flattens one level.
console.log(arr.myFlat(2)); // [1, 2, 3, 5, 6, 7, 8] -> flattens two level.
console.log(arr.myFlat());  // [1, 2, 3, 5, 6, [7, 8]] defaults to depth = 1.
console.log(emptyArr.myFlat()); // []
