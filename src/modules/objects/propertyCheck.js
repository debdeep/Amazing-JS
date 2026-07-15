/*
    Opertors
        "in": Checks if a property exists anywhere in the prototype chain (own or inherited).
        "hasOwnProperty()": Checks if a property exists only on the object itself, not its prototype chain
*/

const obj = { name: "Debdeep" };

console.log("name" in obj);     // true (own property)
console.log("toString" in obj); // true (inherited from Object.prototype)

const obj_new = { name: "Debdeep" };

console.log(obj_new.hasOwnProperty("name"));     // true
console.log(obj_new.hasOwnProperty("toString")); // false (inherited, not own)
