/*
    Bubble Sort is a type of sorting technique where adjacent elements are being checked in every iteration and swaps them if they are in the wrong order. This process continues until the list is sorted.
    During sorting, larger elements “bubble up” to the end of the array with each pass so it it Bubble Sort Technique
    Logic: After Every Iteration Largest element will at the end of the array and trhen 2nd largest and so on
    Loops Logic Hint : Outer Loop (Passes) & inner Loop (Comparisons within a pass)
    Complexity: 
    Time: Best case (already sorted): 𝑂(𝑛) with an optimized version (if no swaps occur). | Worst Case: O(n^2)
    Space: 𝑂(𝑛1) (in-place sorting)

 */
function bubbleSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                // let temp = nums[j];
                // nums[j] = nums[j + 1];
                // nums[j + 1] = temp;
                //using array destructuring optimized
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
            console.log(j);
        }
    }
    return nums;
}

// Outputs:
console.log(bubbleSort([0, 5, 1, 2, 1]));  // [0, 1, 1, 2, 5]
console.log(bubbleSort([-1, 0, 10, 25, 4])); //  [-1, 0, 4, 10, 25]
console.log(bubbleSort([1, 2, 3, 4, 5])); //  [1, 2, 3, 4, 5]
console.log(bubbleSort([0, 13, 21, 34, 11, 10])); // [0, 10, 11, 13, 21, 34]