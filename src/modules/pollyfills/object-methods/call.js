
Function.prototype.myCall = function (context, ...args) {
    // if context is null/undefined, default to global object
    context = context || globalThis;

    // temporarily attach the function to the context
    context.fn = this;

    // invoke it with spread args
    const result = context.fn(...args);

    // clean up
    delete context.fn;

    return result;
};

function greet(greeting, name) {
    console.log(`${greeting}, ${name}! I am ${this.role}`);
}
const person = { role: "Engineer" };
greet.myCall(person, "Hello", "Debdeep");
// Output: Hello, Debdeep! I am Engineer