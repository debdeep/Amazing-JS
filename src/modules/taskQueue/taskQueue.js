/*
    Call Stack → Executes synchronous code first.

    Task Queues:
    Macrotask Queue → setTimeout, setInterval, setImmediate, I/O, UI rendering.
    Microtask Queue → Promise.then/catch/finally, queueMicrotask, MutationObserver.

    Execution Order:
    Run all synchronous code (call stack).
    Empty the microtask queue completely.
    Then run one macrotask, then again clear microtasks, and so on.

    TIPS: Synchronous code runs first. Then the event loop clears all microtasks (Promises) before moving to macrotasks (setTimeout).
        Even inside a macrotask, any new microtasks run immediately after that macrotask finishes, before the next macrotask.
 */

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


/* 
Output-
    Start
    End
    Promise
    Timeout
*/


//TIPS Example:
console.log("---------------------------------------------------------");
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");

    Promise.resolve().then(() => {
        console.log("Promise inside Timeout 1");
    });
}, 2000);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");

/* 
Output-
    Start
    End
    Promise 1
    Timeout 1
    Promise inside Timeout 1
    Timeout 2
*/

