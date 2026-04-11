## Promise
    - In JavaScript, a Promise is an object representing the eventual completion (or failure) of an Asynchronous operation and its resulting value 
## States
    - Pending, Resolved, Rejected
## Base Methods
    - Promise.resolve()
    - Promise.reject()
## Purpose
    - To Provide:-
    - Cleaner Syntax
    - No Call back hell/Pyramid of Doom
    - Centralized Error Handling
    - Better Asynchronous Control using Promise.all() or Promise.race()
## Utility
    - Useful in functional programming
    - async response handling
## Drawbacks
    - No Cancellation
    - Debugging Challenges in case of long chain
    - Not Ideal for Synchronous Code
    - promises are not lazy
### Adhoc Methods
    - Promise.all(iterable)
    - Promise.allSettled(iterable)
    - Promise.race(iterable)
    - Promise.any(iterable)