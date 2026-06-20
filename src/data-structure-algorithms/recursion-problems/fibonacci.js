/*
    Fibonacci Sequence is a special kind of sequence beginning with 0 and 1 where the number will be sum of previous Two Numbers and so on
    Example: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, ...] | Recursive way is Bottom Up approach and uses generated recursion tree to return and generate sequence with F(0) = 0, F(1) = 1
    Formula: F(n) = F(n-1) + f(n-2)
    Complexity: Time: O(2^N) & Space: O(N)
*/
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Outputs:
console.log(fibonacci(5));  // 
console.log(fibonacci(4)); //