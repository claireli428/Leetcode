/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0) return true;
    
    let sIdx = 0;
    for(let i = 0; i < t.length; i++) {
      if(t[i] === s[sIdx]) {
        sIdx++;
        if(sIdx === s.length) return true;
      }
    }

    return false;
};
