/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let dict = new Map();
    for(let i = 0; i < s.length; i++) {
        dict.has(s[i]) ? dict.set(s[i], dict.get(s[i]) + 1) : dict.set(s[i], 1);
    }
    let counter = dict.size;

    for(let i = 0; i < t.length; i++) {
        if(!dict.has(t[i])) return false;
        dict.set(t[i], dict.get(t[i]) - 1);
        if(dict.get(t[i]) < 0) return false;
        if(dict.get(t[i]) === 0) counter--; 
    }

    return counter === 0;
};
