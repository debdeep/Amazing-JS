function sumOfNumbers(string) {
    let sum = 0;
    if (!string.length) return sum;

    let numbers = string.split("").filter((ch) => {
        return /[0-9]/g.test(ch);
    });

    for (let number of numbers) {
        sum = sum + Number(number);
    }
    return sum;
}

//Output:
console.log(sumOfNumbers(""));
console.log(sumOfNumbers("123$He&0"));
console.log(sumOfNumbers("6149469149194&^%$%^&***Hello889"));
console.log(sumOfNumbers("Debajo Rocks..!!"));