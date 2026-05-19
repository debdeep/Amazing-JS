## ⏱️ Time Complexity

**Definition:**  
Time Complexity of an algorithm refers to the amount of **time taken** by the program to run as a function of the size of the input. It helps measure the efficiency of an algorithm in terms of execution time.

---

### 📌 Components of Time Complexity
1. **Constant Time (O(1))**  
   - Execution time does not depend on input size.  
   - Example: Accessing an element in an array by index.  

2. **Linear Time (O(n))**  
   - Execution time grows proportionally with input size.  
   - Example: Iterating through an array of size `n`.  

3. **Quadratic Time (O(n²))**  
   - Execution time grows with the square of input size.  
   - Example: Nested loops over a 2D matrix.  

4. **Logarithmic Time (O(log n))**  
   - Execution time grows slowly as input size increases.  
   - Example: Binary search in a sorted array.  

5. **Exponential Time (O(2^n))**  
   - Execution time doubles with each additional input.  
   - Example: Solving recursive problems like the Traveling Salesman using brute force.  

---

### 💻 Example in JavaScript
```js
// Example: Time Complexity O(n)
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray([1, 2, 3, 4, 5]); 
// Runs in O(n) time because loop executes 'n' times
