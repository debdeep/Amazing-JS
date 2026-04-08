/**
 * Determines whether a sorted array contains a pair of numbers
 * whose sum equals the given target value.
 *
 * This function uses the two-pointer technique:
 * - Start with one pointer at the beginning and one at the end.
 * - Move pointers inward based on whether the current sum is
 *   less than or greater than the target.
 * - Runs in O(n) time and O(1) space.
 *
 * @param {number[]} arr - A sorted array of numbers to search.
 * @param {number} target - The target sum to check for.
 * @returns {boolean} True if a pair exists that sums to the target, otherwise false.
 *
 * @example
 * // returns true (1+6 or 3+4)
 * hasPairSum([1, 2, 3, 4, 6], 7);
 *
 * @example
 * // returns false (no two numbers add up to 8)
 * hasPairSum([1, 2, 3, 9], 8);
 */
function hasPairSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  // assume arr is sorted
  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }

  return false;
}
