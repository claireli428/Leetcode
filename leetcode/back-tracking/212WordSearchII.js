/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var Trie = function () {
    this.children = new Map();
    this.word = null;
}

Trie.prototype.add = function (word) {
    let curr = this;
    for (let i = 0; i < word.length; i++) {
        const c = word[i];
        if (!curr.children.has(c)) curr.children.set(c, new Trie());
        curr = curr.children.get(c);
    }
    curr.word = word;
}

var findWords = function (board, words) {
    if (!board.length || !words.length) return [];

    const trie = new Trie();
    words.forEach(e => { trie.add(e); });
    let res = [];
    let visited = new Array(board.length).fill(false).map(() => new Array(board[0].length).fill(false));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            findWordsFrom(board, i, j, trie, visited, res);
        }
    }

    return res;
};

var findWordsFrom = function (board, row, col, node, visited, res) {
    if (node.word) {
        res.push(node.word);
        node.word = null;
    };

    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || visited[row][col]) return;

    const c = board[row][col];
    if(node.children.has(c)) {
        visited[row][col] = true;

        const newNode = node.children.get(c);
        findWordsFrom(board, row, col - 1, newNode, visited, res);
        findWordsFrom(board, row, col + 1, newNode, visited, res);
        findWordsFrom(board, row - 1, col, newNode, visited, res);
        findWordsFrom(board, row + 1, col, newNode, visited, res);
    
        visited[row][col] = false;
    }
   
}
