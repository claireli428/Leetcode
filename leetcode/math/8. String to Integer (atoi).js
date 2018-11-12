/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (!str.length) return 0;

    let res = 0, minusFlag = false, i = 0;
    while(str[i] === ' ') i++;

    if(str[i] === '-' || str[i] === '+') {
        minusFlag = str[i] === '-' ? true : false;
        i++;
    }

    for(; i < str.length; i++) {
        if(str.charCodeAt(i) < '0'.charCodeAt(0) || str.charCodeAt(i) > '9'.charCodeAt(0)) {
            break;
        } else if(res === 0 && str[i] === '0') {
            continue;
        } else {
            res = res*10 + (str.charCodeAt(i) - 48);
            if(!minusFlag && res > Math.pow(2, 31) - 1) {
                res = Math.pow(2, 31) - 1;
                break;
            }
            if(minusFlag && res > Math.pow(2, 31)) {
                res = Math.pow(2, 31);
                break;
            }
        }
    }

    return minusFlag ? 0 - res : res;
};
