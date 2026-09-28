function outerF() {
    let message = "I am a in Outer Scope"
    function innerF() {
        console.log(message);
    }
    return innerF;
}

const message = outerF()
message() // I am a in Outer Scope