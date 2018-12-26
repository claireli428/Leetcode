/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

    let row = board.length, col = board[0].length;
    let cluster = new UnionFind(row * col);

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === 'O'){
                let currIdx = i * col + j;
                let top = currIdx - col, down = currIdx + col, left = currIdx - 1, right = currIdx + 1;
                if(i > 0 && board[i-1][j] === 'O') cluster.union(currIdx, top);
                if(i < row - 1 && board[i+1][j] === 'O') cluster.union(currIdx, down);
                if(j > 0 && board[i][j - 1] === 'O') cluster.union(currIdx, left);
                if(j < col - 1 && board[i][j + 1] === 'O') cluster.union(currIdx, right);
            }
        }
    }

    let edgeRootSet = new Set();
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
                if(board[i][j] === 'O') {
                    let root = cluster.find(i * col + j);
                    edgeRootSet.add(root);
                }

            }
        }
    }


    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === 'O') {
                let root = cluster.find(i * col + j);
                if(!edgeRootSet.has(root)){
                    board[i][j] = 'X'
                }
            }
        }
    }

};

function UnionFind(n) {
    this._parents = new Array(n+1).fill(0).map((e, i ) => i);
    this._rank = new Array(n+1);

    this.find = function (x) {
        if(x !== this._parents[x]) {
            this._parents[x] = this.find(this._parents[x]);
        }
        return this._parents[x];
    };

    this.union = function (x, y) {
        let rootX = this.find(x), rootY = this.find(y);
        if(this._rank[rootX] > this._rank[rootY]) {
            this._parents[rootY] = rootX;
        } else if(this._rank[rootX] < this._rank[rootY]) {
            this._parents[rootX] = rootY;
        } else {
            this._parents[rootX] = rootY;
            this._rank[rootY]++;
        }
    };
}