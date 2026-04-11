function findPairSumSorted(arr, target) {
    let left = 0, right = arr.length - 1;
    let multiPairArray = [];
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            multiPairArray.push([arr[left], arr[right]]); // return the pairs
            left++;
            right++;
        }
        if (sum < target) left++;
        else right--;
    }

    return multiPairArray;
}

console.log(findPairSumSorted([1, 2, 3, 5, 7, 8], 8)); // [[1, 7],[3,5]]