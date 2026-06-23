/*
    Insertion Sort is a speecial kind of sorting algorithm where smaller elements naturally moves toward the leftmost side of the array and starting form 1 index.
    It is called insertion sort because each element is inserted into its correct position in the already sorted portion of the array.
    Complexity:-
    Time: Worst Case: O(N^2) in Best, Average also
    Space: O(1)  during {In place uses a key variable}
*/
function selectionSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        [nums[i], nums[min]] = [nums[min], nums[i]];
    }
    return nums;
}

console.log(selectionSort([0, 5, 1, 2, 1]));  // [0, 1, 1, 2, 5]
console.log(selectionSort([-1, 0, 10, 25, 4])); //  [-1, 0, 4, 10, 25]
console.log(selectionSort([1, 2, 3, 4, 5])); //  [1, 2, 3, 4, 5]
console.log(selectionSort([0, 13, 21, 34, 11, 10])); // [0, 10, 11, 13, 21, 34]