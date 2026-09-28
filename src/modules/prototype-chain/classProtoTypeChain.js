/*
   ➡ Chain: p → Person.prototype → Object.prototype → null
*/
class Person {

}
let p = new Person();
p.__proto__ === Person.prototype;
Person.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
