function arrayRevRecursive(arr, i = 0, j = arr.length - 1) {
    if (i >= j) return arr;
    [arr[i], arr[j]] = [arr[j], arr[i]]; // inplace destructure swap elements
    //console.log(`arrayRevRecursive(${arr} --${i + 1} -- ${j - 1})`)
    return arrayRevRecursive(arr, i + 1, j - 1); //recirsive call with latest i/j value for next recursion
}

//Outputs:
//console.log(arrayRevRecursive([]));
//console.log(arrayRevRecursive([10]));
console.log(arrayRevRecursive([1, 10, 100, 1000, 2000, 3000]));
//console.log(arrayRevRecursive(["a", "b", "c", "d"]));