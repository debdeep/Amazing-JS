/**
 * Demonstrates callback hell (also known as the pyramid of doom) in asynchronous JavaScript.
 * This example performs a series of nested asynchronous operations:
 * 1. Fetches a user by ID.
 * 2. Retrieves articles for that user.
 * 3. Gets details for the first article.
 * 4. Saves the details.
 * Each callback is nested inside the previous one, leading to deeply indented, hard-to-read code.
 * This pattern can be improved using Promises or async/await for better readability and maintainability.
 */
getUser(1, (user) => {
    console.log('User:', user); //User 
    getArticles(user.id, (articles) => {
        console.log('Articles:', articles);
        getArticleDetails(articles[0], (details) => {
            console.log('Details:', details);
            // Further nesting makes it worse...
            saveDetails(details, (result) => {
                console.log('Saved:', result);
            });
        });
    });
});
