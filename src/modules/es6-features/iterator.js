/*
    An iterator in JavaScript is an object that follows the iterator protocol, meaning it has a next() method that returns an object with two properties:
        value → the current item
        done → a boolean indicating if iteration is complete

    Rule: 
    1. An iterator object must implement a next() method.
    2. The next() method returns an object with two properties: (value) : The next value in the sequence (done) : A boolean that is true if the iterator has finished its sequence, otherwise false .
    TIPS: Arrays, Strings, Maps, and Sets in ES6 are already iterable, which is why you can use them directly with for...of
    Analogy: An iterator is an object that lets you access elements of a collection sequentially using next(), returning { value, done } until the sequence ends.
*/

const iterator = {
    current: 0,
    last: 5,
    next() {
        if (this.current <= this.last) {
            return { value: this.current++, done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
};

let element = iterator.next();
while (!element.done) {
    console.log(element.value); // Logs: 0, 1, 2, 3, 4, 5
    element = iterator.next();
}

