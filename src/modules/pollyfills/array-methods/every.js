Array.prototype.every = function (fn, thisArgs) {
    for (let index = 0; index < this.length; index++) {
        let item = this[index];
        if (fn.call(thisArgs, item)) {
            continue; // keep checking next
        } else {
            return false; // one failure → stop immediately
        }
    }
    return true; // all passed
}
const numbers = [5, 12, 8, 130, 44];
const found_success = numbers.every(num => num > 2);
console.log(found_success); // true
const found_failure = numbers.every(num => num > 200);
console.log(found_failure); // false