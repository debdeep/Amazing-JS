Array.prototype.myMap = function (fn, thisArgs) {
    //console.log("value:",this, thisArgs);
    const results = [];
    let index = 0;
    for (let item of this) {
        //console.log(item)
        results.push(fn.call(thisArgs, item));
        //results.push(fn.call(thisArgs, item, index, this));
        /*
            item → the current element in the array
            index → the current position
            this → the entire array itself (so the callback can see the full array if needed)
        */
    }
    return results;
}
const array = [1, 2, 3, 4, 5];
console.log(array.myMap((item) => item * 2));  // [2, 4, 6, 8, 10]