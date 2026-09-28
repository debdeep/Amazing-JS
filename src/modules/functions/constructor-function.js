function Person(name = "Sample", age = "-") {
    this.name = name;
    this.age = age
}

//with provided fn constructor values
const p1 = new Person("Alice", 90);
console.log(p1.name); // Alice
console.log(p1.age); // 90

//with default constructor parameter values
const p2 = new Person();
console.log(p2.name); //Sample
console.log(p2.age); // -