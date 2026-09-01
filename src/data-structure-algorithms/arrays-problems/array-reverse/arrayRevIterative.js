function arrayRevIterative(arr) {
    let i = 0, j = arr.length - 1;
    console.log(i, j);
    if (i >= j) return arr; // handle single elment check { 0 = 0} and empty array check also:{0 > -1}
    //need to swap left position with right position until both postion index becomes same:
    while (i < j) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++; // left to right pointer increment
        j--; // right to left pointer decrement
    }
    return arr;
}

//Outputs:
console.log(arrayRevIterative([]));
console.log(arrayRevIterative([10]));
console.log(arrayRevIterative([1, 10, 100, 1000, 2000, 3000]));
console.log(arrayRevIterative(["a", "b", "c", "d"]));