function stringReverse(inputString) {
    if (inputString.length > 1) {
        return inputString?.split("")?.reverse().join("");
    }
    return "String Reverse Not Required";
}

console.log(stringReverse("Debajo123"));
console.log(stringReverse("D"));