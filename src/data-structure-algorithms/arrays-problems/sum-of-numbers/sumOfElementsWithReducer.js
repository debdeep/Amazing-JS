function reducerSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(reducerSum([10, 20, 30, 40, 50]));