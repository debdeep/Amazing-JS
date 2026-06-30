/* 
    Merge Sort is a classic divide-and-conquer sorting algorithm.
    It works by recursively splitting the array into halves, 
    sorting each half, and then merging the sorted halves back together.

    🔎 Logic:
    - Divide the array into two halves until each subarray has ONE element.
    - Recursively sort the left half and the right half.
    - Merge the two sorted halves into a single sorted array.
    - Continue until the entire array is merged and sorted.

    🎮 Analogy:
    Imagine splitting a deck of cards into smaller piles until each pile 
    has one card, then merging piles back together in sorted order.

    📊 Complexity:
    - Best Case: O(n log n)
    - Worst Case: O(n log n)
    - Average Case: O(n log n)
    - Space: O(n) (needs extra space for merging)
*/


function mergeSort(nums) {
    if (nums.length <= 1) return nums; // base case

    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid)); //left side recursive break till only one element in array (base condition)
    let right = mergeSort(nums.slice(mid)); //right side recursive break till only one element in array (base condition)

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([0, 5, 1, 2, 1]));  // [0, 1, 1, 2, 5]
console.log(mergeSort([-1, 0, 10, 25, 4])); // [-1, 0, 4, 10, 25]
console.log(mergeSort([1, 2, 3, 4, 5]));   // [1, 2, 3, 4, 5]
console.log(mergeSort([1, -1])); // [-1, 1]
