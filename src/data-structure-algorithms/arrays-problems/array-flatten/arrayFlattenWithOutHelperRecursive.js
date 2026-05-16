/** * Custom Recursive Function to flatten an array without using a helper function.
 * @param {Array} arr - The array to be flattened.
 * @returns {Array} - The flattened array.
 */
function myArrayFlatten(arr) {
    const flattened = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened.push(...myArrayFlatten(arr[i]));
        } else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
}

console.log(myArrayFlatten([1, 2, [3, 4], [[5, 6]], [[[7, 8]]]])); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(myArrayFlatten([])); // []
