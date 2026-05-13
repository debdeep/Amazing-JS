function largestElementBySort(arr) {
    if (arr.length === 0) {
        return null;
    }
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[arr.length - 2]; // Return the second-to-last element which is the second largest
}

largestElementBySort([3, 1, 4, 1, 5, 9]);     // Output: 5
largestElementBySort([-1, -5, -3]);       // Output: -3