Array.prototype.myFilter = function (fn, thisArgs) {
    console.log("value:", this, thisArgs);
    const results = [];
    for (let index = 0; index < this.length; index++) {
        const item = this[index];
        if (fn.call(thisArgs, item, index, this)) {
            results.push(item); // only push if condition is true
        }
    }
    return results;
}

const array = [1, 2, 3, 4, 5];
console.log(array.myFilter((item) => item % 2 == 0));  // [2,4]