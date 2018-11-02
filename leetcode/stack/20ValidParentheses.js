/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s.length) return true;

    let stack = [];
    for(let i = 0; i < s.length; i++) {
        const top = stack[stack.length-1];

        if ((s[i] === ')' && top === '(') || (s[i] === ']' && top === '[') || (s[i] === '}' && top === '{')) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }

    }

    return !stack.length;

};