/*
    Sum of even number elements from an array
 */

function sumEven(elements) {
    if (elements.length < 1) {
        return null
    }
    let sumTotal = elements?.filter((element) => element % 2 === 0)?.reduce((acc, curr) => acc + curr, 0)
    return sumTotal;
}

function sumEvenNumberBasic(elements) {
    let eventNumbersList = elements.filter((ele) => ele % 2 === 0);
    let sumTotal = 0; // setting initial value of result
    for (let i = 0; i < eventNumbersList.length; i++) {
        sumTotal = sumTotal + eventNumbersList[i];
    }
    return sumTotal;

}

//Outputs:
console.log(sumEven([1, 2, 33, 4, 5, 77, 88, 4, 5, 10, -10])); // 98
console.log(sumEven([])); // null
console.log(sumEvenNumberBasic([1, 2, 3, 4, 5, 6])); // 12



