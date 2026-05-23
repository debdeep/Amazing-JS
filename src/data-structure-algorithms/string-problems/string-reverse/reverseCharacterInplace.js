/*
    In Place String reversal (without third array):
    In this string/character by character reversal we are looping through till half loop and swapping elements
    in the array by a[0] with a[length] and so on by login swap(i, length - 1- iterationValue)
    Simple was the one liner to use helper function reverse()
 */
function reverseCharacterInPlace(s) {
    let len = s.length
    if (len <= 1)
        return s;
    //return s.reverse(); // by one liner
    for (let i = 0; i < Math.floor(len / 2); i++) {
        //swapChar(i, len - 1- i);
        let temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }
    return s;
}

//Outputs:
console.log(reverseCharacterInPlace(["D", "E", "B", "D", "E", "E", "P"])); // 
console.log(reverseCharacterInPlace(["D", "E", "B"])); // 
console.log(reverseCharacterInPlace(["D"]));  // 
console.log(reverseCharacterInPlace([])); // 