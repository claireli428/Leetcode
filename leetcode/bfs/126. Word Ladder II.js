/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let graph = createGraph([beginWord, ...wordList]);
    let visited = new Set();
    let step = 0;
    let distanceMap = new Map();

    let queue = [beginWord];
    visited.add(beginWord);
    distanceMap.set(beginWord, step);
    let exist = false;
    while (queue.length) {
        let len = queue.length;
        step++;
        while (len) {
            let head = queue.shift();
            let neighbors = graph.get(head);
            for(let neighbor of neighbors.values()) {
                if(!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                    distanceMap.set(neighbor, step);
                    if(neighbor === endWord) exist = true;
                }
            }
            len--;
        }
        if(exist) break;
    }
    if(!exist) return [];
    console.log(distanceMap, step);

    let res = [];
    dfs(beginWord, endWord, graph, distanceMap, 0, res, [beginWord]);
    return res;
};

var dfs = function (curWord, targetWord, graph, distanceMap, step, res, path) {
    if(curWord === targetWord) {
        res.push(path)
        return;
    }

    let neighbors = graph.get(curWord);
    for(let neighbor of neighbors.values()) {
        if(distanceMap.has(neighbor) && distanceMap.get(neighbor) === step + 1) {
            path.push(neighbor)
            dfs(neighbor, targetWord, graph, distanceMap, step + 1, res, path.slice(0));
            path.pop();
        }
    }
};

var createGraph = function (wordList) {
    let graph = new Map();
    for(let i = 0; i < wordList.length; i++) {
        graph.set(wordList[i], findNeighbors(wordList[i], wordList));
    }
    return graph;
};

var findNeighbors = function (word, wordList) {
    let neighbors = new Set();
    for (let i = 0; i < word.length; i++) {
        for (let n = 'a'.charCodeAt(); n < 'z'.charCodeAt(); n++) {
            const c = String.fromCharCode(n);
            if (c !== word[i]) {
                const newWord = word.substring(0, i) + c + word.substring(i + 1);

                if (wordList.includes(newWord)) {
                    neighbors.add(newWord);
                }
            }
        }
    }
    return neighbors;
};