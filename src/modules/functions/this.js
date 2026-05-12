// Arrow function
const add = (a, b) => a + b;

// Normal function
function addNormal(a, b) {
  return a + b;
}

// 'this' difference
const obj = {
  value: 10,
  arrow: () => console.log(this.value), // undefined (inherits outer scope)
  normal() { console.log(this.value); } // 10 (bound to obj)
};
obj.arrow();   // undefined
obj.normal();  // 10