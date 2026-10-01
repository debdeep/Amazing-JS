if (!Number.isInteger) {
    Number.isInteger = function (value) {
        return typeof value === "number" &&
            isFinite(value) &&
            Math.floor(value) === value;
    };
}

console.log(Number.isInteger(10));       // true ✅
console.log(Number.isInteger(10.5));     // false ❌
console.log(Number.isInteger("10"));     // false ❌ (string, not number)
console.log(Number.isInteger(NaN));      // false ❌
console.log(Number.isInteger(Infinity)); // false ❌
