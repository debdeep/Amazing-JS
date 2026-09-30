Array.prototype.find = function (fn, thisArgs) {
    //console.log("Context value:", this);
    let result;
    for (let index = 0; index < this.length; index++) {
        let item = this[index];
        //console.log("item:", item);
        if (fn.call(thisArgs, item)) {
            result = item;
            break
        }
    }
    return result;
}
const numbers = [5, 12, 8, 130, 44];
const found_success = numbers.find(num => num > 10);
console.log(found_success); // 12
const found_failure = numbers.find(num => num > 200);
console.log(found_failure); // undefined