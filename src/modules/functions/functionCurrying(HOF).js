function multiply(x) {
    return function(y) {
        return x * y;
  };
}
var curriedMultiplyFun = multiply(2);
console.log(curriedMultiplyFun(5));