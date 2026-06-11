const original = {
  name: "Debdeep",
  skills: { frontend: "Vue", backend: "Node" }
};

const deepCopy = structuredClone(original);

deepCopy.skills.frontend = "React"; // ✅ independent

console.log(original.skills.frontend); // "Vue"
