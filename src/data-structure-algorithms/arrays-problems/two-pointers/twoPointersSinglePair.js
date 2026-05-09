function findPairSumSorted(arr, target) {
  arr.sort((a, b) => a - b); // sort first
  let left = 0, right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]]; // return the pair
    }
    if (sum < target) left++;
    else right--;
  }

  return null;
}

console.log(findPairSumSorted([3, 5, 1, 7], 8)); // [1, 7]