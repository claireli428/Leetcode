/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let dict = new Map();

  for (let i = 0; i < s.length; i++) {
    if (dict.has(s[i])) {
      dict.get(s[i]).count++;
    } else {
      dict.set(s[i], { index: i, count: 1 });
    }
  }

  let res = s.length;
  for (let [key, value] of dict) {
    if (value.count === 1) {
      res = Math.min(res, value.index);
    }
  }

  if (res === s.length) res = -1;
  return res;
};
