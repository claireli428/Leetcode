/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
     if(!c) return true;

    let a = Math.floor(Math.sqrt(c));
    while(a) {
        let b = Math.floor(Math.sqrt(c-a*a));
        if(b*b + a*a === c) return true;

        a--;
    }

    return false;
};
