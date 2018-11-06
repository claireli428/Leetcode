/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) return [];
    
    let res = [];
    const dict = generateDict();
    helper(digits, digits.length, dict, res, []);
    return res;
};

var helper = function (remainDigits, n, dict, res, visited) {
    if(visited.length === n) {
        res.push(visited.join(''));
        return;
    }

    const idx = parseInt(remainDigits[0]);
    const arr = dict[idx];
    for(let j = 0; j < arr.length; j++) {
        visited.push(arr[j]);
        helper(remainDigits.substring(1), n, dict, res, visited.slice(0));
        visited.pop();
    }
}

var generateDict = function () {
    let dict = [null, null];
    let c = 'a'.charCodeAt(0);
    for(let i = 2; i < 10; i++) {
        let temp = [];
        if(i === 7 || i === 9) {
            for(let j = 0; j < 4; j++) {
                temp.push(String.fromCharCode(c));
                c++;
            }
        } else {
            for(let j = 0; j < 3; j++) {
                temp.push(String.fromCharCode(c));
                c++;
            }
        }
        dict.push(temp);
    }

    return dict;
}