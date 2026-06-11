const original = {
  name: "Debdeep",
  skills: { frontend: "Vue", backend: "Node" }
};

const shallowCopy = Object.assign({}, original);

shallowCopy.name = "Changed"; // ✅ independent
shallowCopy.skills.frontend = "React"; // ❌ also changes original.skills.frontend

console.log(original.skills.frontend); // "React"
