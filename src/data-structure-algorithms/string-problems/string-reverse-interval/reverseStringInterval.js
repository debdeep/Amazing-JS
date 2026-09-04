/* 
    Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
    If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters,
    then reverse the first k characters and leave the other as original. | s consists of only lowercase English letters.
*/
function reverseStringInterval(str, k) {
    let arr = str.split(""); // convert to array
    for (let i = 0; i < arr.length; i = i + 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join("");
}

//Output:-
console.log(reverseStringInterval("abcdefghijkl", 4));