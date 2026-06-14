/*
    Merge Sorted Arrays (Without a third Copy):
    Two sorted arrays need to be merged into a single "sorted" one in "non-decreasing order" like having duplicates
    and the other array (nums2) will be of length 0 then.
    nums1 = [1, 2 ,3, 4, 0, 0, 0, 0]  -> m = 4  | nums2 = [4, 5, 6, 7] -> n = 4 // m & n denotes to Length of arrays
    Results - nums1 = [1, 2, 3, 4, 4, 5, 6, 7];
 */

function mergeSortedArraysInplace(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1;
    for (let i = (m + n - 1); i >= 0; i--) {
        if (p2 < 0)
            break;

        if (p1>=0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
}

console.log(mergeSortedArraysInplace([1, 2, 3, 4], 4, [2, 5, 6, 7, 8], 5)); // [1, 2, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSortedArraysInplace([1, 2], 1, [], 0)); // [1, 2]