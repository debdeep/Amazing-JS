/*
    Object.preventExtensions() is a method in JavaScript that prevents new properties from being added to an object. However, it does not affect the deletion or modification
    of existing properties. This method is useful when you want to ensure that an object remains in a certain shape and no additional properties can be added to it.
 */

const obj = { name: 'John', id: 1 };
Object.preventExtensions(obj);
obj.age = 30; // This will not work, as the object is not extensible
console.log(obj.age); // undefine

console.log(obj); // {name: 'John', id: 1}
delete obj.id;
console.log(obj); // {name: 'John'}