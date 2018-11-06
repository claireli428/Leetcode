/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length < t.length) return "";

    let dictT = new Map();
    for(let i = 0; i < t.length; i++) {
        dictT.has(t[i]) ?  dictT.set(t[i],dictT.get(t[i]) +  1): dictT.set(t[i], 1);
    }
    let counter = dictT.size;

    let left = 0, right = 0, minLen = s.length, res = "";
    while (right < s.length) {
        if(dictT.has(s[right])) {
            dictT.set(s[right], dictT.get(s[right]) - 1);
            if(dictT.get(s[right]) === 0) {
                counter--;

                while (counter === 0) {
                    if(dictT.has(s[left])) {
                        if(right - left + 1 <= minLen) {
                            minLen = right - left + 1;
                            res = s.substr(left, minLen);
                        }

                        dictT.set(s[left], dictT.get(s[left]) + 1);
                        if(dictT.get(s[left]) > 0) counter++;
                    }
                    left++;
                }
            }
        }
        right++;
    }

    return res;
};