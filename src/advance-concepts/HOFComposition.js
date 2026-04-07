/* Higher Order Function Composition */
function add(x) {
    return x + 2;
}
function mul(x) {
    return x * 3;
}

function compose(f, g) {
    return function(x) {
        return f(g(x));
  };
}
var res = compose(add, mul)(4);
console.log(res);
//  4 is first multiplied by 3 and add 2 > 14

