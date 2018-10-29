/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let memo = new Map();
    return helper(s, wordDict, memo);
};

var helper = function (s, wordDict, memo) {
    if (memo.has(s)) return memo.get(s);

    let res = [];
    for (let l = 0; l < s.length; l++) {
        const left = s.substring(0, l), right = s.substring(l);
        if (wordDict.includes(right)) {
            let temp = helper(left, wordDict, memo);
            memo.set(left, temp);
            if (!temp.length && right === s) {
                res.push(right);
            } else {
                temp.forEach(e => { res.push(e + ' ' + right); });
            }
        }
    }

    memo.set(s, res);
    return res;
}

