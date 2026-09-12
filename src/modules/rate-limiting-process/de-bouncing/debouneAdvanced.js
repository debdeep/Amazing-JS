let currentController; // keep track of the active request

// Debounce utility
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// API call function with cancellation
async function callAPI(query) {
    if (!query) {
        document.getElementById("results").innerHTML = "";
        return;
    }

    // Cancel any previous request
    if (currentController) {
        currentController.abort();
    }

    // Create a new controller for this request
    currentController = new AbortController();
    const { signal } = currentController;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });
        const data = await response.json();

        // Filter users by name
        const results = data.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );

        // Render results
        const resultsList = document.getElementById("results");
        if (results.length > 0) {
            resultsList.innerHTML = results.map(user => `<li>${user.name}</li>`).join("");
        } else {
            resultsList.innerHTML = `<li>No matches for: ${query}</li>`;
        }
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Previous request aborted");
        } else {
            console.error("API error:", error);
            document.getElementById("results").innerHTML = "<li>Error fetching data</li>";
        }
    }
}

// Attach debounced handler to input
document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("search");
    inputBox.addEventListener("input", debounce((e) => {
        callAPI(e.target.value);
    }, 2000)); // fires once after 2s pause
});
