function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);

//Built-in HOF- map()
const sample = [1, 2, 3, 4, 5];
const square = sample.map((num) => num * num);
console.log(square);
//[1,4,9,16,25]


//Built-in HOF- filter()
const arr = [1, 2, 3, 4, 5];
const even = n.mafilterp((num) => num %2 === 0);
console.log(even);
//[2,4]

//Built-in HOF- reduce()
const elements = [1, 2, 3, 4, 5];
const sum = elements.reduce((acc, curr) => acc + curr, 0)
console.log(sum);
//15

//Built-in HOF- forEach()
const iterable = [1, 2, 3];
iterable.forEach((num) => console.log(num * 2));
//2,4

//Built-in HOF- find() - returns first matched element | similary some(), every()
const n = [1, 2, 3, 4, 5];
const fEven = n.find((num) => num % 2 === 0);
console.log(fEven);

