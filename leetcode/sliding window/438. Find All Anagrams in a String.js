/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */


// Input:
//     s: "cbaebabacd" p: "abc"
//
// Output:
//     [0, 6]
//
// Explanation:
//     The substring with start index = 0 is "cba", which is an anagram of "abc".
//     The substring with start index = 6 is "bac", which is an anagram of "abc".


var findAnagrams = function(s, p) {
    if(s.length < p.length) return [];

    let dictP = new Map();
    for(let i = 0; i < p.length; i++) {
        dictP.has(p[i]) ?  dictP.set(p[i],dictP.get(p[i]) +  1): dictP.set(p[i], 1);
    }
    let counter = dictP.size;

    let left = 0, right = 0;
    let res = [];
    while (right < s.length) {
        
        if(dictP.has(s[right])) {
            dictP.set(s[right], dictP.get(s[right]) - 1);
            if(dictP.get(s[right]) === 0) {
                counter--;
                while (counter === 0) {
                    if(right - left + 1 === p.length) {
                        res.push(left);
                    }

                    if(dictP.has(s[left])) {
                        dictP.set(s[left], dictP.get(s[left]) + 1);
                        if(dictP.get(s[left]) > 0) counter++;
                    }
                    left++;
                }
            }

        }

        right++;
    }

    return res;
};