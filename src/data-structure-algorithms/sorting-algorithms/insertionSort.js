/* 
    Insertion Sort is a simple sorting technique where each element 
    is inserted into its correct position in the already sorted part of the array.

    🔎 Logic:
    - Start from index 1 (second element).
    - Compare the current element with elements on its left.
    - Shift larger elements one step to the right.
    - Insert the current element into the correct position.
    - Repeat until the array is sorted.

    🎮 Analogy:
    Like arranging cards in your hand — you pick the next card and 
    insert it into the right place among the already sorted cards.

    📊 Complexity:
    - Best Case (already sorted): O(n)
    - Worst Case (reverse sorted): O(n^2)
    - Average Case: O(n^2)
    - Space: O(1) (in-place, only uses a temporary variable)
*/

function insertionSort(nums) {
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        let curr = nums[i];
        let prev = i - 1;

        while (prev >= 0 && nums[prev] > curr) {
            nums[prev + 1] = nums[prev]; // shift right
            prev--;
        }
        nums[prev + 1] = curr; // insert at correct position
    }
    return nums;
}

console.log(insertionSort([0, 5, 1, 2, 1]));  // [0, 1, 1, 2, 5]
console.log(insertionSort([-1, 0, 10, 25, 4])); // [-1, 0, 4, 10, 25]
console.log(insertionSort([1, 2, 3, 4, 5]));   // [1, 2, 3, 4, 5]
console.log(insertionSort([0, 13, 21, 34, 11, 10])); // [0, 10, 11, 13, 21, 34]
