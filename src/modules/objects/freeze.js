
  const obj = { name: "Debdeep" };
  Object.freeze(obj);

  obj.name = "Changed";   // ❌ ignored
  obj.age = 35;           // ❌ cannot add
  delete obj.name;        // ❌ cannot remove

  console.log(obj); // { name: "Debdeep" }
