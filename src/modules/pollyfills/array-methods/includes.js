Array.prototype.myIncludes = function (target) {
    //console.log("Context value:", this);
    for (let index = 0; index < this.length; index++) {
        let item = this[index];
        console.log("item:", item);
        if (item === target) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

Array.prototype.myIncludesFromIndex = function (target, fromIndex = 0) {
    // Handle negative fromIndex (count from end)
    let start = fromIndex >= 0 ? fromIndex : this.length + fromIndex;
    if (start < 0) start = 0;

    for (let i = start; i < this.length; i++) {
        if (this[i] === target || (Number.isNaN(target) && Number.isNaN(this[i]))) {
            return true;
        }
    }
    return false;
}

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.myIncludes(3));       // true
console.log(numbers.myIncludes(6));       // false
console.log(numbers.myIncludesFromIndex(3, 3));    // false (starts search at index 3)