Array.prototype.some = function (fn, thisArgs) {
    for (let index = 0; index < this.length; index++) {
        let item = this[index];
        if (fn.call(thisArgs, item)) {
            return true; // stop immediately if one passes
        }
    }
    return false; // none passed
};

const numbers = [5, 12, 8, 130, 44];

const found_success = numbers.some(num => num > 10);
console.log(found_success); // true (12, 130, 44 pass)

const found_failure = numbers.some(num => num > 200);
console.log(found_failure); // false (none pass)
