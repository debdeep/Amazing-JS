const obj = { name: "Debdeep" };
Object.seal(obj);

obj.name = "Changed";   // ✅ allowed
obj.age = 35;           // ❌ cannot add
delete obj.name;        // ❌ cannot remove

console.log(obj); // { name: "Changed" }
