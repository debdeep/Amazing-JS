function separateOddEven(arr) {
    if (arr.length === 0) {
        return null
    }
    let odd = [];
    let even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }

    return { "Odd Numbers": odd, "Even Numbers": even };
}

//input:
console.log(separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9])); //{Odd Numbers: Array(5), Even Numbers: Array(4)}
console.log(separateOddEven([]));  //null
console.log(separateOddEven([1])); // {Odd Numbers: Array(1), Even Numbers: Array(0)}
