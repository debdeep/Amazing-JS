function getUserById({ id, name = "", address = "-" }) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("No Id provided"));
        } else {
            resolve({
                userId: id,
                name: name,
                address: address
            });
        }
    });
}

let users = [
    { id: 1, name: "A", address: "Pune" },
    { id: 1, name: "B", address: "Pune 2" },
    { id: 1, name: "C", address: "Pune 3" },
    { id: null, name: "D" }
];

async function fetchAllUsers(users) {
    const promises = users.map((user) => getUserById(user));
    console.log(promises);

    const results = await Promise.allSettled(promises);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`User ${index + 1} resolved:`, result.value);
        } else {
            console.log(`User ${index + 1} rejected:`, result.reason.message);
        }
    });

    return results;
}

fetchAllUsers(users);

/*
Output:
    User 1 resolved: {userId: 1, name: 'A', address: 'Pune'}
    User 2 resolved: {userId: 1, name: 'B', address: 'Pune 2'}
    User 3 resolved: {userId: 1, name: 'C', address: 'Pune 3'}
    User 4 rejected: No Id provided
*/
