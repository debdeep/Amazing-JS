/*
    Right now your groupAnagrams solution uses sorting (word.split("").sort().join("")) to generate the key. That makes the complexity about O(n · m log m).

    Solution: 
        Instead of sorting, we can build a frequency signature for each word in O(m) time. Since the alphabet size is fixed (26 lowercase letters),
        we can represent each word by a 26‑length frequency array or string. This avoids the log m factor.
*/
function groupAnagramOptimised(strs) {
    if (strs.length < 2) return [strs];

    let map = {};
    for (let word of strs) {
        // Build frequency signature
        let freq = new Array(26).fill(0);
        //console.log('freq signaure BEFORE:', freq);
        for (let ch of word) {
            freq[ch.charCodeAt(0) - 97]++; // 'a' = 97
        }
        console.log('freq signaure AFTER:', freq);

        let key = freq.join("#"); // unique signature

        console.log("Generated Key:", key);
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }
    return Object.values(map);

}

// Outputs:
console.log(groupAnagramOptimised([""])); // [[""]]
console.log(groupAnagramOptimised(["eat", "tea", "tan", "ate", "nat", "bat"]));   // [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagramOptimised(["a"])); // [["a"]]