/*
    Given two strings str1 and str2, determine if they are isomorphic. Two strings str1 and str2 are isomorphic if the characters in str1 can be replaced to get str2.
    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character,
    but a character may map to itself.
    Constraints: str1.length == str2.length | s and t consist of any valid ascii character.
*/
function isIsomorphic(str1, str2) {
    if (str1.length !== str2.length) return false; // base case

    const map1 = {}, map2 = {}; // map1 ensures each character in str1 maps consistently to one in str2 && map2 ensures no two characters in str1 map to the same character in str2
    for (let i = 0; i < str1.length; i++) {
        let ch_str1 = str1[i], ch_str2 = str2[i];

        if ((map1[ch_str1] && map1[ch_str1] !== ch_str2) ||
            (map2[ch_str2] && map2[ch_str2] !== ch_str1)) {
            return false;
        }

        map1[ch_str1] = ch_str2;
        map2[ch_str2] = ch_str1;
    }
    return true;
}

// Outputs:
console.log(isIsomorphic("egg", "add"));   // true
console.log(isIsomorphic("f11", "b23")); // false
console.log(isIsomorphic("paper", "title")); // true