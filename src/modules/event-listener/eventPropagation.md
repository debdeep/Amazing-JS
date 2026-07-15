# 📌 Event Propagation in JavaScript

Event propagation describes how events travel through the DOM in **three phases**:

1. **Capturing Phase (Top → Target)**  
   - Event moves from the root down to the target.  
   - Enable with `addEventListener(event, handler, true)`.

2. **Target Phase**  
   - Event executes on the target element itself.

3. **Bubbling Phase (Target → Top)**  
   - Event bubbles back up from the target to the root.  
   - Default phase for most event listeners.

---

## ✅ Example
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent capturing");
}, true); // Capturing

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
}); // Target

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent bubbling");
}); // Bubbling
</script>
