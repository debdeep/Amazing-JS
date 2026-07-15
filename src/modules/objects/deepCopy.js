/*
  It refers to Copies not only the first level of properties but the whole object itself deeply. It is useful for simple objects & deeply nested structures.
  TIPS: Performance HIT | DO when needed only
  Examples: structuredClone() | JSON.parse(JSON.stringify(obj) | Lodash (_.cloneDeep)
 */
const original = {
  name: "Debdeep",
  skills: { frontend: "Vue", backend: "Node" }
};

const deepCopy = structuredClone(original);

deepCopy.skills.frontend = "React"; // ✅ independent

console.log(original.skills.frontend); // "Vue"
