/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    let leftQ = [beginWord], rightQ = [endWord], step = 1, visited = new Set([beginWord, endWord]);
    while (leftQ.length || rightQ.length) {
        step++;
        let len = leftQ.length;
        while (len) {
            const word = leftQ.shift();
            for (let i = 0; i < word.length; i++) {
                for (let n = 'a'.charCodeAt(); n < 'z'.charCodeAt(); n++) {
                    const c = String.fromCharCode(n);
                    if (c !== word[i]) {
                        const newWord = word.substring(0, i) + c + word.substring(i + 1);
                        if (rightQ.includes(newWord)) return step;
                        if (wordList.includes(newWord) && !visited.has(newWord)) {
                            visited.add(newWord);
                            leftQ.push(newWord);
                        }
                    }
                }
            }
            len--;
        }
        const temp = leftQ.slice(0);
        leftQ = rightQ.slice(0);
        rightQ = temp.slice(0);
    }

    return 0;
};
