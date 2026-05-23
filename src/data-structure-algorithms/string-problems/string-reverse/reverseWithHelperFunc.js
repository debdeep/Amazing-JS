function stringReverse(inputString) {
    if (inputString.length > 1) {
        return inputString?.split("")?.reverse().join("");
    }
    return null;
}

//Outputs:
console.log(stringReverse("Debajo123")); // 321ojabeD
console.log(stringReverse("D")); // null
console.log(stringReverse("")); // null