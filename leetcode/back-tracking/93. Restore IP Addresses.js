/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    helper(s, 0, [], res);
    return res;
};

var helper = function(str, start, path, res) {
  if(path.length === 4) {
    if(start >= str.length) res.push(path.join('.'));
    return;
  }

  for(let i = 1; i <= 3 && start + i <= str.length; i++) {
    let subStr = str.substr(start, i);
    let num = parseInt(subStr)
    if((num === 0 && i === 1) || (num > 0 && subStr[0] !== '0' && num <= 255)) {
      path.push(subStr);
      helper(str, start + i, path, res);
      path.pop();
    }
  }
};
