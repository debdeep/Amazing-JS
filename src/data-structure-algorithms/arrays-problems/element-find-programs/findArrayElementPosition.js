function arrayElementPosition(arr, elementToFind) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elementToFind) {
            return i; // Return the index of the found element
        }
    }
    return -1; // Return -1 if the element is not found
}

// Outputs:
console.log(arrayElementPosition([1, 2, 3, 4, 5], 3)); // 2
console.log(arrayElementPosition([1, 2, 3, 4, 5], 6)); //  -1
console.log(arrayElementPosition([], 6)); //  -1