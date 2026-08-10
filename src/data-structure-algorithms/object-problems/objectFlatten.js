// Example
const nestedObj = {
    user: {
        name: "Debdeep",
        address: {
            city: "Pune",
            pin: 411001
        }
    },
    role: "Engineer",
    phones: ["Phone 1", "Phone 2"],
};

function flattenObject(obj, prefix = '') {
    let result = {}
    if (typeof obj !== 'object' || obj === null) return null;
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        let value = obj[key];
        //console.log("key:", value);

        //path key
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (Array.isArray(value)) {    //Array keys logic
            value.forEach((item, index) => {
                const arrayKey = `${newKey}.${index}`;
                if (typeof item === 'object' && item !== null) {
                    Object.assign(result, flattenObject(item, arrayKey));
                } else {
                    result[arrayKey] = item;
                }
            })
        } else if (typeof value === "object" && value !== null && !Array.isArray(value)) {  //object keys logic
            //console.log("Object Found:", value);
            Object.assign(result, flattenObject(value, newKey))
        } else {    //normal root level keys logic
            result[newKey] = value;
        }
    }
    return result;
}


console.log(flattenObject(nestedObj));
/*
{
  "user.name": "Debdeep",
  "user.address.city": "Pune",
  "user.address.pin": 411001,
  "role": "Engineer"
  "phones.0": "Phone 1",
  "phones.1": "Phone 2",
}
*/