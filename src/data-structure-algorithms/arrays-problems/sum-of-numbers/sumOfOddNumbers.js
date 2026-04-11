/*
    Sum of odd number elements from an array
 */

function sumOdd(elements) {
    if (elements.length < 1) {
        //throw Error("Array cannnot be empty");
        return;
    }
    let sumTotal = elements?.filter((element) => element % 2 !== 0)?.reduce((acc, curr) => acc + curr, 0)
    return sumTotal;
}

function sumOddNumberBasic(elements) {
    let numbersList = elements.filter((ele) => ele % 2 !== 0);
    let sumTotal = 0; // setting initial value of result
    for (let i = 0; i < numbersList.length; i++) {
        sumTotal = sumTotal + numbersList[i];
    }
    return sumTotal;

}

console.log(sumOdd([1, 2, 33, 4, 5, 77, 88, 4, 5, 10, -10]));
console.log(sumOdd([]));
console.log(sumOddNumberBasic([1, 2, 3, 4, 5, 6]));



