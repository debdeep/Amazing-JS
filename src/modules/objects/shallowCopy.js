/*
  It refers to Copies only the first level of properties. It is useful for simple objects, but risky with deeply nested structures.
  TIPS: Nested objects/arrays remain references → changes in the copy affect the original.
  Examples: Spread Operator(...) | Object.assign() | Array methods (slice, concat)
 */
const original = {
  name: "Debdeep",
  skills: { frontend: "Vue", backend: "Node" }
};

const shallowCopy = Object.assign({}, original);

shallowCopy.name = "Changed"; // ✅ independent
shallowCopy.skills.frontend = "React"; // ❌ also changes original.skills.frontend

console.log(original.skills.frontend); // "React"
