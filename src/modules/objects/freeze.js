/*
  Immutable objects cannot be directly modified after creation. Its content cannot be changed without creating an entirely new value.
*/

const obj = { name: "Debdeep" };
Object.freeze(obj);

obj.name = "Changed";   // ❌ ignored
obj.age = 35;           // ❌ cannot add
delete obj.name;        // ❌ cannot remove

console.log(obj); // { name: "Debdeep" }
