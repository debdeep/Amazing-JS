let array = [1, 2, 3, 4, 5, 6, 7];

function recursiveSumOfElements(array, arrayLength) {
    if (arrayLength === 0) {
        return 0;
    } else {
        return array[arrayLength - 1] + recursiveSumOfElements(array, arrayLength - 1);
    }

}

console.log(recursiveSumOfElements(array, array.length));
