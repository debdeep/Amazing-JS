/** * Function to flatten an array recursively using the built-in flat method.
 * @param {Array} arr - The array to be flattened.
 * @returns {Array} - The flattened array.
 */

function arrayFlatRecursive(arr) {
    return arr.flat(Infinity); // Using the built-in flat method with Infinity depth to flatten the array recursively
}

// Test cases
console.log(arrayFlatRecursive([1, 2, [3, 4], [[5, 6]], [[[7, 8]]]])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrayFlatRecursive([1, [2, [3, [4, [5]]]], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(arrayFlatRecursive([1, 2, 3])); // Output: [1, 2, 3]
console.log(arrayFlatRecursive([])); // Output: []