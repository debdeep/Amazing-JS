function greetUser(company, role) {
    console.log(`Hello ${this.name}, Welcome to ${company} as a ${role}.`);
}

const user = ({ name: 'Debdeep' });

const newFunc = greetUser.bind(user, "Happiest Minds", "Tech Lead");  // creates a copy of the function which can be run later or can be reused. 
newFunc();

// newFunc(); recalled for re-use