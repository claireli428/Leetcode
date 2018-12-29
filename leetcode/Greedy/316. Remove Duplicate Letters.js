/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    if(s.length < 2) return s;

    let res = ['0'];
    let dict = new Map();
    for(let i = 0; i < s.length; i++) {
        let count = dict.has(s[i]) ? dict.get(s[i]) : 0;
        dict.set(s[i], count + 1);
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        dict.set(c, dict.get(c) - 1);

        if(!res.includes(c)) {
            while (res[res.length - 1] > c && dict.get(res[res.length - 1]) > 0) {
                res.pop();
            }
            res.push(c);
        }
    }

    return res.slice(1).join('');
};