const cache = new Map();
async function  getUser(id) {
    if(cache.has(id)){
        return cache.get(id);
    }
    const user = await db.findUser(id);
    cache(id, user);
    return user;
}