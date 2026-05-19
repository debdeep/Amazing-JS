## 🧮 Space Complexity

**Definition:**  
Space Complexity of an algorithm refers to the total amount of memory or space required by the program to execute successfully. It includes memory used for variables, data structures, function calls, and temporary storage during execution.

---

### 📌 Components of Space Complexity
1. **Fixed Part**  
   - Memory required by constants, program code, and simple variables.  
   - Independent of input size.  

2. **Variable Part**  
   - Memory required by dynamic structures, recursion stack, and input data.  
   - Depends on the size of the input.  

---

### ⚖️ Common Space Complexities
- **O(1):** Constant space → Example: Swapping two numbers.  
- **O(n):** Linear space → Example: Storing an array of size `n`.  
- **O(n²):** Quadratic space → Example: 2D matrix operations.  

---

### 💻 Example in JavaScript
```js
// Example: Space Complexity O(n)
function createArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(createArray(5)); // [0,1,2,3,4]
