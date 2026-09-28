/*
    Here’s a Stateful version where the closure not only remembers but also updates and controls access to the outer variable:
    
    Concept: Currying transforms f(a, b, c) into f(a)(b)(c).
 */
function outerF() {
    let message = "I am in Outer Scope";

    return {
        getMessage: function () {
            console.log(message);
        },
        setMessage: function (newMsg) {
            message = newMsg;
        },
        resetMessage: function () {
            message = "I am in Outer Scope";
        }
    };
}

const closureObj = outerF();

closureObj.getMessage();   // "I am in Outer Scope"
closureObj.setMessage("Updated by inner closure");
closureObj.getMessage();   // "Updated by inner closure"
closureObj.resetMessage();
closureObj.getMessage();   // "I am in Outer Scope"


function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2

