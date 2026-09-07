function removeNonAsciiCharacters(string) {
    if (!string.length) return null;

    return string.trim().toLowerCase().split("").filter((ch) => {
        return /[a-zA-Z0-9]/g.test(ch);
    }).join("");

}

//Output:
console.log(removeNonAsciiCharacters(""));
console.log(removeNonAsciiCharacters("  $He&"));
console.log(removeNonAsciiCharacters("6149469149194&^%$%^&***Hello889"));
console.log(removeNonAsciiCharacters("Debajo Rocks..!!"));