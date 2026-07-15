/*
    Object.seal() is used to prevent new properties from being added to an object and to mark all existing properties as non-configurable.
    This means you can still modify the values of existing properties, but you cannot delete them or add new ones.
    TIPS: 'use strict' -> throw errors in strict mode but fail silently in non-strict mode
*/

const obj = { name: "Debdeep" };
Object.seal(obj);

obj.name = "Changed";   // ✅ allowed
obj.age = 35;           // ❌ cannot add
delete obj.name;        // ❌ cannot remove

console.log(obj); // { name: "Changed" }
