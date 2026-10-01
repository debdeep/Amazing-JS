function myNumber(arg) {
    return arg !== null && arg !== undefined && arg.constructor === Number;
}

console.log(myNumber(123));       // true ✅
console.log(myNumber("123"));     // false ❌
console.log(myNumber(new Number(5))); // true ✅
