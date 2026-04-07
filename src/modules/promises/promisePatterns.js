/**
 * Demonstrates the use of Promise.all to handle multiple promises concurrently.
 * This example creates three resolved promises with values 1, 2, and 3,
 * waits for all to resolve, and logs the resulting array [1, 2, 3].
 * If any promise rejects, the error is caught and logged.
 */
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => {
    console.log(results); // [1, 2, 3]
}).catch(error => {
    console.error(error);
});