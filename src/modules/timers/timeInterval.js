/* This code demonstrates the use of setInterval to execute a function repeatedly at specified intervals.
 * The setInterval function takes two arguments: a callback function and an interval in milliseconds.
 * The callback function will be executed every time the specified interval has passed until the interval is cleared.
 * In this example, we have a setInterval call that logs "Hello, World!" to the console every 1000 milliseconds (1 second).
 */
setInterval(() => {
    console.log('Hello, World!');
}, 1000);


// Output:
// Hello, World!
// Hello, World!
// Hello, World!
// ... and so on every second until the interval is cleared.