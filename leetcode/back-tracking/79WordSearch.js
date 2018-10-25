/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(!board.length || board.length * board[0].length < word.length) return false;

    let visited = new Array(board.length).fill(false).map(() => new Array(board[0].length).fill(false));
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === word[0] && helper(board, word, i, j, visited)) return true; 
        }
    }

    return false;
};

var helper = function(board, word, row, col, visited) {
    if(word.length === 0) return true;
    if(row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] !== word[0] || visited[row][col]) return false;

    visited[row][col] = true;
    const newWrod = word.substring(1)
    const left = helper(board, newWrod, row, col - 1, visited);
    const right = helper(board, newWrod, row, col + 1, visited);
    const up = helper(board, newWrod, row - 1, col, visited);
    const down = helper(board, newWrod, row + 1, col, visited);

    if(left || right || up || down)  return true;
    visited[row][col] = false;
}
