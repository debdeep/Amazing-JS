function sumCurried(a) {
    let sum = a;

    function inner(b) {
        if (b !== undefined) {
            sum += b;
            return inner; // keep chaining
        }
        return sum; // stop when called with ()
    }

    return inner;
}

// Usage
console.log(sumCurried(1)(2)(3)(4)(5)()); // 15
console.log(sumCurried(10)(20)());        // 30
console.log(sumCurried(7)());             // 7
