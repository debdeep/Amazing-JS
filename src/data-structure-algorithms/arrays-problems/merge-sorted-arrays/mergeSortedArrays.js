/*
    Merge Sorted Arrays (With a Copy):
    Two sorted arrays need to be merged into a single "sorted" one in "non-decreasing order" like having duplicates
    and the other array (nums2) will be of length 0 then.
    nums1 = [1, 2, 3, 4, 0, 0, 0, 0]  -> m = 4  | nums2 = [4, 5, 6, 7] -> n = 4 // m & n denotes to Length of arrays
    Results - nums1 = [1, 2, 3, 4, 4, 5, 6, 7];
 */

function mergeSortedArrays(nums1, m, nums2, n) {
    let nums1_copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (nums1_copy[p1] < nums2[p2] && p1 < m)) {
            nums1[i] = nums1_copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
}

//Outputs:
console.log(mergeSortedArrays([1, 2, 3, 4], 4, [2, 5, 6, 7, 8], 5)); // [1, 2, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSortedArrays([1, 2], 2, [2, 5, 6, 7, 8], 5)); // [1, 2, 2, 5, 6, 7, 8]
console.log(mergeSortedArrays([1, 2], 1, [], 0)); // [1, 2]

//Shortcut Method - Brute force approach
console.log([1, 2, 3, 4].concat([1, 2]).sort());
