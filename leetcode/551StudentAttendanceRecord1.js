/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    if(!s.length) return true;

    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'A') {
            if(count > 0) return false;
            count++;
        } 
        
        if(s[i] === 'L' && i < s.length - 2 && s[i+1] === 'L' && s[i+2] === 'L') 
            return false;

    }

    return true;
};
