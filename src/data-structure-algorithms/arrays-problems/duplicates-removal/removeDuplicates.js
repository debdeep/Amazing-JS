function removeDuplicates(arr) {
    let newArray = [];
    if (arr.length < 2) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}


//Outputs:
console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 99, 100, 99])); // [1, 2, 3, 4, 5, 99, 100]
console.log(removeDuplicates([1])); // [1]
console.log(removeDuplicates([])); // []
console.log(removeDuplicates([-11, 11, 12, -12, -12, 13])); // [-11, 11, 12, -12, 13]
