function secondLargestBySort(arr) {
    if (arr.length === 0) {
        return null;
    }
    if (arr.length > 1) {
        arr.sort((a, b) => a - b); // Sort the array in ascending order
        return arr[arr.length - 2]; // Return the second-to-last element which is the second largest
    } else {
        return "Err..!! Only one element in array";
    }
}

//Outputs-
console.log(secondLargestBySort([3, 1, 4, 1, 5, 9, 9]));     // 9
console.log(secondLargestBySort([-1, -5, -3]));       // -3
console.log(secondLargestBySort([-1, -5, -3, -3, -5]));       // -3
console.log(secondLargestBySort([])); //null
console.log(secondLargestBySort([10])); // Err..!! Only one element in array

