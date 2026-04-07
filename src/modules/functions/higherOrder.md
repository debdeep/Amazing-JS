# Higher Order Functions
In Javascript, a HOF is a function that does atleast one of the following-
- Takes one or more functions as arguments (callbacks)
- returns a function as its result.
## Feasibility
This is feasible because functions in JS are First Order Citizens meaning they can be treated as another variable(passed, returned, assigned)

### Example of custom HOF
`function iterateAndPrint(n, action) {
  for (let i = 0; i < n; i++) {
    action(i); // Calling the function passed as an argument
  }
}

iterateAndPrint(3, console.log); `
// Output: 0, 1, 2

#### Examples
1. Built is HOF's - Array Methods like map(), filter(), reduce()
2. Function Closures (function returning functions)
3. Timer Functions like setTimeout()/setTimeInterval() of Node.js