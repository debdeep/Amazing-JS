/**
 * Demonstrates promise chaining by sequentially executing asynchronous operations.
 * Starts by fetching data, then processes it, saves it, and logs the final result.
 * Handles errors with a catch block.
 */

/**
 * Simulates fetching data asynchronously.
 * @returns {Promise<string>} A promise that resolves with the fetched data after a delay.
 */
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

/**
 * Processes the given data asynchronously and returns a promise that resolves to the processed result.
 * @param {*} data - The data to be processed.
 * @returns {Promise<string>} A promise that resolves with the processed data string after a delay.
 */
function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${data} processed`);
        }, 1000);
    });
}

/**
 * Simulates saving data asynchronously by returning a promise that resolves after a delay.
 * @param {*} data - The data to be saved.
 * @returns {Promise<string>} A promise that resolves with a message indicating the data was saved.
 */
function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${data} saved`);
        }, 1000);
    });
}

// Chaining promises
fetchData()
    .then(processData)
    .then(saveData)
    .then(result => {
        console.log(result); // Output: Data fetched, processed & saved
    })
    .catch(error => {
        console.error('Error:', error);
    });