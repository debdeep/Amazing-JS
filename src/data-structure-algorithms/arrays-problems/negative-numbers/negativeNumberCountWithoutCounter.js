
function negativeNumbersCount(arr) {
    let negativeNumberList = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeNumberList?.push(arr[i]);
        }
    }
    return negativeNumberList.length;
}

console.log(negativeNumbersCount([1, 2, 3, -1, -6, -1])) // 3

console.log(negativeNumbersCount([])) // 0