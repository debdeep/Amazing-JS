//Flatten a deeply nested array
arr = [1, 2, 3, [4, [5, 6, [100]]], 7, 8];
//arr.flat(Infinity).sort((a,b) => a-b) //custom in built flat()

function deepFlat(arr, dept = 1) {
    let resultArray = [];
    for (const key in arr) {
        //console.log(`element is:${arr[key]}`);
        if (Array.isArray(arr[key]) && dept > 0) {
            //console.log("Array & element is:", arr[key]);
            resultArray.push(...deepFlat(arr[key], dept - 1));
        } else {
            resultArray.push(arr[key]);
        }
    }
    return resultArray;
}

deepFlat(arr, 2)