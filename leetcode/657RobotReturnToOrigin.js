/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var x = 0, y = 0;
    for(move of moves) {
        switch (move) {
            case 'R': x++;break;
            case 'L': x--;break;
            case 'U': y++;break;
            case 'D': y--;break;
            default: break;
        }
    }
    return x === 0 && y === 0;
};
