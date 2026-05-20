

Array.prototype.flat = function myFlat(depth = 0) {
    const flattenedResult = [];
    function flatten(arr, d) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && d < depth) {
                //console.log('Element is an array:', arr[i]);
                flatten(arr[i], d + 1);
            } else {
                //console.log('Element is not an array:', arr[i]);
                flattenedResult.push(arr[i]);
            }
        }
    }
    flatten(this, 0)
    return flattenedResult;
}

const arr = [1, 2, 3, [5, 6, [7, 8]]];
const emptyArr = [];
console.log('arr.flat(1):', arr.flat(1)); // Output: [1, 2, 3, 5, 6, [7, 8]]
console.log('arr.flat(2):', arr.flat(2)); // Output: [1, 2, 3, 5, 6, 7, 8]
console.log('arr.flat():', arr.flat()); // Output: [1, 2, 3, 5, 6, [7, 8]]
console.log('emptyArr.flat():', emptyArr.flat()); // Output: []