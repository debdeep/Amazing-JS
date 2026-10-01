Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...newArgs) {
        return fn.apply(context, args.concat(newArgs));
    }
}


// Demo
function printDetails(age, country, timestamp = "NA") {
    console.log(`User: ${this.name}, Age: ${age}, Country: ${country} and Time:${timestamp}`);
}

const user = { name: "Debdeep" };
const boundFn = printDetails.myBind(user, 23);
boundFn("India");
boundFn("USA", new Date().toISOString());
// Output: User: Debdeep, Age: 23, Country: India