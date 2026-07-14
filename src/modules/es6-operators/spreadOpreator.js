/*
    Spread operator is a special type of operator which helps to un-pack an array or object in a new manner rather than
    a traditional way to execute js expressions. It came with ES6.
    Analogy- Spread → Like emptying a bag onto the table (you see all items individually).
*/

// Array Usage - Merging
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6];
let res = [...arr1, ...arr2];
console.log("Result after Array spread-merge Operation:", res); // [1, 2, 3, 4, 5, 6]

// Array Usage - Copying
let a1 = [9, 8, 10];
let a2 = [...a1]
console.log("Result after Array spread-copy Operation:", a2); // [9, 8, 10]

// Array Usage - Merging
let obj_1 = { id: "1" };
let obj_2 = { name: "Debdeep", Age: 24 };
let obj_merge = { ...obj_1, ...obj_2 };
console.log("Result after Object spread-merge Operation:", obj_merge); // {id: '1', name: 'Debdeep', Age: 24}

// Array Usage - Copying

let obj_initial = { id: "1" };
let obj_copy = { name: "Debdeep", Age: 24, ...obj_initial };
console.log("Result after Object spread-copy Operation:", obj_copy); // {name: 'Debdeep', Age: 24, id: '1'}

