function largestElement(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    let largest = arr[0]; // Initialize largest with the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if the current element is greater
        }
    }
    return largest; // Return the largest element
}

// Outputs:
console.log(largestElement([3, 1, 4, 1, 5, 9]));     // 9
console.log(largestElement([-1, -5, -3]));       // -1
console.log(largestElement([]));     // null