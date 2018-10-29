/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */


// BiDirection BFS
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) return 0;
    let queueS = [];
    let queueE = [];
    let visitedS = new Set();
    let visitedE = new Set();
    queueS.push(beginWord);
    queueE.push(endWord);
    visitedS.add(beginWord); visitedE.add(endWord);

    let step = 1;
    let order = true;
    while (queueS.length || queueE.length) {
        let levelSize;
        if(order){
            levelSize = queueS.length;
            for(let i = 0; i< levelSize; i++){
                let currNode = queueS.shift();
                let neighbors = findNeighbors(currNode, wordList.slice(0), visitedS, queueE);
                if(neighbors[0] === '-1') return step+1;
                queueS.push(...neighbors);
            }

        }else{
            levelSize = queueE.length;
            for(let i = 0; i< levelSize; i++){
                let currNode = queueE.shift();
                let neighbors = findNeighbors(currNode, wordList.slice(0), visitedE, queueS);
                if(neighbors[0] === '-1') return step+1;
                queueE.push(...neighbors);
            }

        }
        step++;
        order = !order
    }

    return 0;
};

var findNeighbors = function (searchItem, wordDict, visited, queue) {
    let wordDictSet = new Set(wordDict);
    let neighbors = [];
    for(let char = 'a'.charCodeAt(0); char <= 'z'.charCodeAt(0); char++){
        let currChar = String.fromCharCode(char);
        for(let i = 0; i < searchItem.length; i++){
            if(currChar !== searchItem[i]){
                let temp = searchItem.substr(0,i) + currChar + searchItem.substring(i+1);
                if(wordDictSet.has(temp) && !visited.has(temp)){
                    if(queue.includes(temp)) return ['-1'];
                    neighbors.push(temp);
                    visited.add(temp);
                }
            }
        }
    }
    return neighbors;
};


// BFS
// var ladderLength = function(beginWord, endWord, wordList) {
//     let queue = [];
//     let visited = new Set();
//     queue.push(beginWord);
//     visited.add(beginWord);
//     let step = 1;
//     while (queue.length){
//         let levelSize = queue.length;
//         for(let i = 0; i < levelSize; i++){
//             let currNode = queue.shift();
//             let neighbors = findNeighbors(currNode, wordList.slice(0), visited);
//             queue.push(...neighbors);
//             if(queue.includes(endWord)) return step+1;
//         }
//         step++;
//     }
//     return 0;
// };

// var findNeighbors = function (searchItem, wordDict, visited) {
//     let wordDictSet = new Set(wordDict);
//     let neighbors = [];
//     for(let char = 'a'.charCodeAt(0); char <= 'z'.charCodeAt(0); char++){
//         let currChar = String.fromCharCode(char);
//         for(let i = 0; i < searchItem.length; i++){
//             if(currChar !== searchItem[i]){
//                 let temp = searchItem.substr(0,i) + currChar + searchItem.substring(i+1);
//                 if(wordDictSet.has(temp) && !visited.has(temp)){
//                     neighbors.push(temp);
//                     visited.add(temp);
//                 }
//             }
//         }
//     }
//     return neighbors;
// };