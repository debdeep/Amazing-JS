/*
    Finding Maximum number from an array of elements
*/

function findMaxBasic(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}

function findMaxReducer(array) {
    const result = array.reduce((max, curr) => {
        if (curr > max) {
            max = curr
        }
        return max
    }, 0);
    return result;
}

console.log(findMaxBasic([1, 2, 3, 4, 5, 6, 88, 99]));
console.log(findMaxReducer([1, 2, 3, 4, 5, 6, 88, 100]));
