/*
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    Constraints: 0 <= strs[i].length <= 100 | strs[i] consists of lowercase English letters.
*/
function groupAnagrams(strs) {
    if (strs.length < 2) return [strs];

    let map = {};
    for (let word of strs) {
        // Normalize: sort words by characters
        let key = word.split("").sort().join("");  //T: O(n * mlog(n)) | S: O(n * m) (n -> number of strings, m -> max length of each string)
        //console.log("key:", key);

        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }
    //console.log('map:', map);
    return Object.values(map);  //returning only values as we need only grouped values
}

// Outputs:
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));   // [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams(["a"])); // [["a"]]

