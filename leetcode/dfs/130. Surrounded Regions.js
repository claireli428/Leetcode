/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let starts = findBoundrays(board);
    let visited = new Array(board.length).fill(false).map(() => new Array(board[0].length).fill(false));
    for(let i = 0; i < starts.length; i++) {
        dfs(board, visited, starts[i].row, starts[i].col);
    }

    for(let r = 1; r < board.length - 1; r++) {
        for(let c = 1; c < board[0].length - 1; c++) {
            if(board[r][c] === 'O' && !visited[r][c]) {
                board[r][c] = 'X';
            }
        }
    }

    return board;
};

var dfs = function (board, visited, row, col) {
    if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || visited[row][col]) return;

    if(board[row][col] === 'X') return;

    visited[row][col] = true;

    dfs(board, visited, row + 1, col);
    dfs(board, visited, row - 1, col);
    dfs(board, visited, row, col + 1);
    dfs(board, visited, row, col - 1);
};

var findBoundrays = function (board) {
    let res = [];
    const rows = board.length, cols = board[0].length;
    for(let row = 0; row < rows; row++) {
        if(board[row][0] === 'O') res.push({row: row, col: 0});
        if(board[row][cols - 1] === 'O') res.push({row: row, col: cols-1});
    }

    for(let col = 0; col < cols; col++) {
        if(board[0][col] === 'O') res.push({row: 0, col: col});
        if(board[rows - 1][col] === 'O') res.push({row: rows - 1, col: col});
    }

    return res;
};