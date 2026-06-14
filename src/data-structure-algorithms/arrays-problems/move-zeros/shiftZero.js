function shiftZero(array) {
    const results = [];
    let zeroCount = 0;
    for (let i in array) {
        if (array[i] !== 0) {
            results.push(array[i]);
        } else {
            zeroCount++
        }
    }
    //console.log(results, zeroCount);
    while (zeroCount > 0) {
        results.push(0);
        zeroCount--;
    }
    return results;
}

//Outputs:
console.log(shiftZero([1, 2, 3, 0, 0, 5, 9, 0])) // [1, 2, 3, 5, 9, 0, 0, 0]