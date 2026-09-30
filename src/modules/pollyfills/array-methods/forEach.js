Array.prototype.myForEach = function (fn, thisArgs) {
    if (typeof fn !== "function") {
        throw new TypeError(fn + " is not a function");
    }

    for (let i = 0; i < this.length; i++) {
        fn.call(thisArgs, this[i], i, this);
    }
    // no return → always undefined
};

const arr = [10, 20, 30];
arr.myForEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});
