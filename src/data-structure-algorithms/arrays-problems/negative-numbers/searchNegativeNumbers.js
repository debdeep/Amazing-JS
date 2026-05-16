
function searchNegativeNumbers(arr) {
    let negativeNumberList = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeNumberList?.push(arr[i]);
        }
    }
    return negativeNumberList;
}

console.log(searchNegativeNumbers([1, 2, 3, -1, -6, -1])) // [-1, -6, -1]
console.log(searchNegativeNumbers([1,2,3])) // []
console.log(searchNegativeNumbers([])) // []