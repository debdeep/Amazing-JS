function getResultById(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("Id missing"))
        } else {
            resolve({
                id: id
            })
        }
    })
}

//using .then()
getResultById(2).then((response) => {
    console.log(`Promise response is: ${response.id}`)
}).catch((e) => console.log(e)).finally(() => console.log("End"));


//using async & await
async function getResult() {
    try {
        const response = await getResultById();
        console.log(`Promise response is: ${response.id}`);
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log("End");
    }
}

getResult() //