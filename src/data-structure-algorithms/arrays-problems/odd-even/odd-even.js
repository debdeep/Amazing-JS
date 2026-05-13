function separateOddEven(arr) {
    let odd = [];
    let even = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    
    return { odd, even };
}

//input:
console.log(separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));