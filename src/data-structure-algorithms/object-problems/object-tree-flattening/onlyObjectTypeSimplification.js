function onlyObjectTypeSimplification(obj, prefix = "#") {
    let resultObj = {};

    //loop through every element of source object
    for (let key in obj) {
        let value = obj[key];

        //console.log(`Value of key:${key} is: ${value}`);
        const pathKey = prefix ? `${prefix}_${key}` : key;

        //checking items inside source object is again a object itself or not
        if (typeof value === "object" && value !== null) {

            //if value is again a object then recursively check and simplify accordingly
            Object.assign(resultObj, onlyObjectTypeSimplification(value, pathKey));
        } else {

            // when value type is of not type Object
            resultObj[pathKey] = value;
        }
    }
    return resultObj;
}

// Example
const sourceObject = {
    user: {
        name: "Debdeep",
        address: {
            current: {
                city: "Pune",
                pin: 411001
            },
            permanent: {
                city: "Panagarh",
                pin: 713148
            }
        },
        contact: {
            mobile: {
                number: "0011224455"
            },
            landline: {
                code: "033",
                number: "1122333"
            }
        }
    },
    role: "Engineer",
    isAdmin: false
};

//Output
console.log(onlyObjectTypeSimplification(sourceObject));
console.log(onlyObjectTypeSimplification({}));
