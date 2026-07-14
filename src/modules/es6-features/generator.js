/*
    Generators are a special functions that can PAUSE execution and RESUME at a laterpoint. It uses the function* syntax and the yield keyword to control the flow of execution.
    Calling a generator doesn’t run it immediately; instead, it returns an iterator object. Each call to .next() resumes execution until the next yield.

    Analogy: When you call a generator function it doesn't get executed at once like regular function rather that it can be called by next() to yield
    the next iterator() object containing {value, done}
    method.
*/

function* numberGenerator() {
    let num = 0;
    while (num <= 5) {
        yield num++;
    }
}

const gen = numberGenerator();

//calling next method to iterate manually
console.log(gen.next()); // {value: 0, done: false}
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 4, done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: undefined, done: true}