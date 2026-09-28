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
    })
}

let users = [{ id: 1, name: "A", address: "Pune" }, { id: 1, name: "B", address: "Pune 2" }, { id: 1, name: "C", address: "Pune 3" }, { id: 1, name: "D" }];

async function fetchAllUsers(users) {
    const promises = users.map((id) => getUserById(id));
    console.log(promises);
    const responses = await Promise.all(promises);
    console.log(responses);
    return responses;
}
fetchAllUsers(users);

/*
Output:
    [ { userId: 1, name: 'A', address: 'Pune' },
        { userId: 1, name: 'B', address: 'Pune 2' },
        { userId: 1, name: 'C', address: 'Pune 3' },
            { userId: 1, name: 'D', address: '-' } 
    ]
*/