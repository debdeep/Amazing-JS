const weakMap = new WeakMap();
let obj = { name: "Debdeep" };

weakMap.set(obj, "Engineer");
console.log(weakMap.get(obj)); // Engineer

obj = null; // remove reference
// The entry in weakMap is garbage-collected automatically
