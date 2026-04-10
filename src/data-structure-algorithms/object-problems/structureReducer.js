/*
    OutPut Structure where final object will return age with countsfor user..!!

    {
        25: 2,
        21: 1,
        23: 1,
        24: 1,
        25: 2,
        26: 1,
        27: 1,
    }
*/
const users = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Smith', age: 21 },
    { firstName: 'Alice', lastName: 'Johnson', age: 30 },
    { firstName: 'Bob', lastName: 'Brown', age: 22 },
    { firstName: 'Charlie', lastName: 'Davis', age: 30 },
    { firstName: 'Eve', lastName: 'Miller', age: 23 },
    { firstName: 'Frank', lastName: 'Wilson', age: 24 },
    { firstName: 'Grace', lastName: 'Moore', age: 26 },
    { firstName: 'Henry', lastName: 'Taylor', age: 27 },
    { firstName: 'Ivy', lastName: 'Anderson', age: 25 }
];

function filterResponse(users) {
    const result = users.reduce((acc, curr) => {
        const age = curr.age;
        if (acc[age]) {
            acc[age]++
        } else {
            acc[age] = 1
        }
        return acc
    }, {})
    return result;
}

console.log(filterResponse(users))


