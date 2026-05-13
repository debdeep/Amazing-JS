
function negativeNumbersCountWithCounter(arr) {
    let negativeNumberList = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeNumberList?.push(arr[i]);
            counter++
        }
    }
    return counter;
}

console.log(negativeNumbersCountWithCounter([1, 2, 3, -1, -6, -1])) // 3

console.log(negativeNumbersCountWithCounter([])) // 0

console.log(negativeNumbersCountWithCounter([1, 2, 3, 4])) // 0