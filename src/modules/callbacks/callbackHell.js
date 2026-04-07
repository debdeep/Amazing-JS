/*
    Nested call back or Call back Hell or Pyramid of Doom use case example
    User response-> Articles response -> Details response -> Saved
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
