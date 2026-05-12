/*
    The clearInterval() method is used to stop a timer that was previously created with setInterval().
    It takes the interval ID returned by setInterval() as an argument and clears the timer,
    preventing the specified function from being executed repeatedly.
*/

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log("Count:", count);

    // Stop after 5 iterations
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval cleared!");
    }
}, 1000);
