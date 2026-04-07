/**
 * Asynchronously retrieves data. | A function that is async will "always" returns an promise response
 * @returns {Promise<string>} A promise that resolves to the string "PromiseData".
 */
async function getAsyncData() {
    return "PromiseData";
}
const data = getAsyncData();
console.log("data:", data);