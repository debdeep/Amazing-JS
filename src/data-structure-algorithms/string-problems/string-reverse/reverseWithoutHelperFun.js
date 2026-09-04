function stringReverseGeneric(str = "") {
    let arr = str.split(""); // convert to array
    let i = 0, j = arr.length - 1;

    if (i >= j) return str;

    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        i++;
        j--;
    }

    return arr.join(""); // convert back to string
}

// Outputs:
console.log(stringReverseGeneric("Rocky"));     // "ykcoR"
console.log(stringReverseGeneric("Debajo123")); // "321ojabeD"
