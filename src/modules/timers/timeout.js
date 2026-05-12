/* 
    This code demonstrates the use of setTimeout to schedule functions to be executed after a certain delay.
    The setTimeout function takes two arguments: a callback function and a delay in milliseconds.
    The callback function will be executed after the specified delay has passed.
    In this example, we have three setTimeout calls with different delays, which will log messages to the console at different times.
 */

setTimeout(() => {
    console.log("This will be printed after 2 seconds");
}, 2000);

setTimeout(() => {
    console.log("This will be printed after 4 seconds");
}, 4000);

setTimeout(() => {
    console.log("This will be printed after 0 seconds");
}, 0);

// Output:
// This will be printed after 0 seconds
// This will be printed after 2 seconds
// This will be printed after 4 seconds