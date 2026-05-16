function secondLargestUsingPointer(arr) {
    if (arr.length < 2) {
        return null;
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest; // Always need to update old first largest elmement into second one before update
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== firstLargest) { // 2nd check during duplicates for 2nd output scenario
            secondLargest = arr[i]
        }
        console.log(`During ${i} iteration 1st-largest is: ${firstLargest} & 2nd-largest is: ${secondLargest} \n`);
    }

    return { firstLargest: firstLargest, secondLargest: secondLargest }
}

//Outputs-
console.log(secondLargestUsingPointer([1, 100, -100, 10, 200, 99, 999, 2000, 1999])); // { firstLargest: 2000, secondLargest: 1999 }
console.log(secondLargestUsingPointer([10, 20, 8, 9, 3, 5, 20])); // {firstLargest: 20, secondLargest: 10}
console.log(secondLargestUsingPointer([1])); // null