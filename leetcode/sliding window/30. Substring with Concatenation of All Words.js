/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!s.length || !words.length) return [];

    let dict = new Map();
    words.forEach(w => { dict.has(w) ? dict.set(w, dict.get(w) + 1) : dict.set(w, 1); });

    let res = [];
    let n = words.length, len = words[0].length;
    for (let i = 0; i <= s.length - n * len; i++) {
        let right = i, visited = new Map(), counter = dict.size;
        while (right < s.length) {
            const word = s.substr(right, len);
            if (!dict.has(word)) break;
            visited.has(word) ? visited.set(word, visited.get(word) + 1) : visited.set(word, 1);
            if (visited.get(word) > dict.get(word)) break;
            if (visited.get(word) === dict.get(word)) counter--;
            if (counter === 0) {
                res.push(i);
                break;
            }
            right += len;
        }
    }

    return res;
};
