function greetUser(company, role){
    console.log( `Hello ${this.name}, Welcome to ${company} as a ${role}.`);
}

const user = ({name: 'Debdeep'});

greetUser.apply(user, ["Happiest Minds", "Tech Lead"]); // runs immediately invoked but takes arguments as array