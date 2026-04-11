/**
 * Promise.all([p1, p2, p3]) 
 * FAILFAST -
 * Happy Case - Demonstrates the use of Promise.all to handle multiple promises concurrently.
 * This example creates three resolved promises with values 1, 2, and 3,
 * waits for all to resolve, and logs the resulting array [1, 2, 3].
 * Failure Case - If any promise fails, the error is caught and logged and returned.
 * FYI: In any one the promise fails/rejected it will exit with error then and there without executing remaining onces
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

/*
    Promise.allSettled([p1, p2, p3])
    Success Case - Same.
    Failure Case - Works differently in case of failure, once first one fails,
    it waits for others to get settle and returns all the results (array containing objects)
*/

Promise.allSettled([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => {
    console.log(results); // [1, 2, 3]
}).catch(error => {
    console.error(error);
});


/**
 * Promise.race([p1, p2, p3])
 * Success Case- Returns as soon as the first promise settles.
 * Failure Case- rejects as soon as the first promise settles.
 */
Promise.race([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => {
    console.log(results); // [1, 2, 3]
}).catch(error => {
    console.error(error);
});


/**
 * Promise.any([p1, p2, p3])
 * Success Case- Resolves when the first promise fulfills
 * Failure Case- aggregated error - when all fails i.e. [err1, err2, err3]
 */
Promise.any([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => {
    console.log(results); // [1, 2, 3]
}).catch(error => {
    console.error(error);
});

