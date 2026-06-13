const map = new Map();
map.set("name", "Debdeep");
map.set(1, "Number key");
map.set({ role: "Engineer" }, "Object key");

console.log(map.get("name")); // Debdeep
console.log(map.size);        // 3

for (const [key, value] of map) {
  console.log(key, value);
}
