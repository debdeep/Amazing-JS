Array.prototype.findIndex = function (fn, thisArgs) {
    //console.log("Context value:", this);
    for (let index = 0; index < this.length; index++) {
        let item = this[index];
        //console.log("item:", item);
        if (fn.call(thisArgs, item)) {
            return index; // return the first match index and exit directly
        }
    }
    return -1; // if nothing matches
}
const numbers = [5, 12, 8, 130, 44];
const found_success = numbers.findIndex(num => num > 10);
console.log(found_success); // 1
const found_failure = numbers.findIndex(num => num > 200);
console.log(found_failure); // -1