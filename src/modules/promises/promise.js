/**
 * Creates a simple Promise that resolves or rejects based on a success flag.
 * This example demonstrates basic Promise creation and consumption using .then(), .catch(), and .finally().
  * @returns {Promise<string>} A Promise that resolves with "Promise Resolved..!" if success is true, or rejects with "Promise Rejected..!" if false.
 */
const myPromise = new Promise((resolve, reject) => {
    const success = true; // true | false
    if (success) {
        resolve("Promise Resolved..!");
    } else {
        reject("Promise Rejected..!");
    }
});

// Consuming the promise
myPromise.then(response => console.log(response)).catch(err => console.error(err)).finally(() => console.log("Promise Execution Done..!"));