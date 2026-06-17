/*
    In this recursive approach we calculate the sum of array elements
    starting from the last index (n-1) down to index 0.

    Base case: when n === 0, return 0.
    Recursive case: take nums[n-1] and add it to the sum of the remaining array.

    Dry run for [1,2,3,4,5]:

    sumOfArrayElements([1,2,3,4,5], 5)
      -> 5 + sumOfArrayElements([1,2,3,4,5], 4)
      -> 4 + sumOfArrayElements([1,2,3,4,5], 3)
      -> 3 + sumOfArrayElements([1,2,3,4,5], 2)
      -> 2 + sumOfArrayElements([1,2,3,4,5], 1)
      -> 1 + sumOfArrayElements([1,2,3,4,5], 0)
      -> base case returns 0

    Stack unwinds (work after recursion returns):
      1 + 0 = 1
      2 + 1 = 3
      3 + 3 = 6
      4 + 6 = 10
      5 + 10 = 15

    Final result: 15
*/
function sumOfArrayElements(nums, n = nums.length) {
    if (n === 0) return 0;
    //console.log('Log:', nums[n - 1], n - 1)
    return nums[n - 1] + sumOfArrayElements(nums, n - 1);

}


// Outputs:
console.log(sumOfArrayElements([1, 2, 3, 4, 5]));  // 15
console.log(sumOfArrayElements([11, 22, 33, 44, 55])); //165