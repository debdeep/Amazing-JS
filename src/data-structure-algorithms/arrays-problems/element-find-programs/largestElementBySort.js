function largestElementBySort(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[arr.length - 1]; // Return the last element which is the largest
}

largestElementBySort([3, 1, 4, 1, 5, 9]);     // Output: 9
largestElementBySort([-1, -5, -3]);       // Output: -3