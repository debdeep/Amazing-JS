/*
    Fibonacci Sequence is a special kind of sequence beginning with 0 and 1 where the number will be sum of previous Two Numbers and so on.
    This iterative approach is easy as we start from position 2 to till given position generating the sequence and assuming first two positions as 0, 1.
    Left to Right Approach - > Example: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, ...]
    Formula: F(n) = F(n-1)+ f(n-2)
    Complexity: Time: O(n) & Space: O(1)
*/
function iterativeFibo(position) {
    let sequence = [];
    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i < position; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

// Outputs:
console.log(iterativeFibo(5));  // [0, 1, 1, 2, 3]
console.log(iterativeFibo(4)); // [0, 1, 1, 2, 3]
console.log(iterativeFibo(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(iterativeFibo(2)); // [0, 1]