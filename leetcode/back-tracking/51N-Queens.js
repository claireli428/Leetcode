/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
    let res = [], state = [];
    helper(res, state, 0, n);
    return res;
};

var helper = function (res, state, row, n) {
    if(row === n) {
        let opt = [];
        for(let r = 0; r < state.length; r++) {
            let str = '';
            for(let c = 0; c < n; c++) {
                str += state[r] === c ? 'Q' : '.';
            }
            opt.push(str);
        }
        res.push(opt);
        return;
    }

    for(let col = 0; col < n; col++) {
        if(isValid(state, row, col)) {
            state.push(col);
            helper(res, state, row+1, n);
            state.pop();
        }
    }
};

var isValid = function (state, row, col) {
    for(let r = 0; r < row; r++) {
        if(state[r] === col || row - r === Math.abs(col - state[r]))
            return false;
    }

    return true;
};
