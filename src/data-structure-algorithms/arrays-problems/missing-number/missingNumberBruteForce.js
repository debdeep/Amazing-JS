function missingNumberBruteforce(nums) {
    let nums_sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums_sorted.length; i++) {
        if (nums_sorted[i + 1] !== nums_sorted[i] + 1) {
            return nums_sorted[i] + 1;
        }
    }
    return null
}

//Outputs:
console.log(missingNumberBruteforce([1, 2, 3, 0, 5, 6, 7])); // 4
console.log(missingNumberBruteforce([1, 2, 4, 5, 6, 7])); // 3 
console.log(missingNumberBruteforce([1, 0])); // 2
console.log(missingNumberBruteforce([1])); // 2
console.log(missingNumberBruteforce([0])); // 1
console.log(missingNumberBruteforce([])); // null
