function findSmallestElement(arr) {
    if (Array.isArray(arr)) {
        if (arr?.length === 0) {
            return null
        }
        if (arr?.length === 1) {
            return arr[0] // for one lememnt array default largest is the only elment present at position 0
        }
        arr?.sort((a, b) => a - b);
        return arr[0] // as array is sorted from low to high value so a[0] will become smallest element of array
    }
    return "Input type Should be array"
}

console.log(findSmallestElement([1, 2, 3, 4, 5, 6, 7, 8, -1, -2])) // -2
console.log(findSmallestElement([5])) // 5
console.log(findSmallestElement()) // null


