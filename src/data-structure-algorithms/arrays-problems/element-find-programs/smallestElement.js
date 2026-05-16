function findSmallestElement(arr) {
    if (arr.length === 0) {
        return null
    }
    arr.sort((a, b) => a - b)
    return arr[0] // as array is sorted from low to high value so a[0] will become smallest element of array
}

console.log(findSmallestElement([1, 2, 3, 4, 5, 6, 7, 8, -1, -2]))

