const recursiveSum = (array, len = array.length) => {
    return len === 0 ? 0 : (array[len - 1] + recursiveSum(array, len - 1));

}

console.log(recursiveSum([10, 20, 30, 40, 50]));