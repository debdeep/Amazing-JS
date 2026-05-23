/* Remove duplicates in place means we need to change the original array itself
    without the help of any additional array/ variables.
*/

function removeDuplicatesInPlace(nums) {
    if (nums.length === 0) return [];
    let x = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x + 1; // length of unique elements
}


//Outputs:
arr1 = [1, 2, 2, 3, 3, 4, 5, 99, 100];
let len1 = removeDuplicatesInPlace(arr1);
console.log(arr1.slice(0, len1)); // [1, 2, 3, 4, 5, 99, 100]

arr2 = [-11, 11, 12, -12, -12, 13, 13];
let len2 = removeDuplicatesInPlace(arr2);
console.log(arr2.slice(0, len2)); // [1, 2, 3, 4, 5, 99, 100]