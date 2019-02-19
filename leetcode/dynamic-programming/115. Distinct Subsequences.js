/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  if (!s.length || s.length < t.length) return 0;
  if (!t.length || s === t) return 1;

  let sc = s[s.length - 1], tc = t[t.length - 1];

  let res = numDistinct(s.substring(0, s.length - 1), t);
  if (sc === tc) {
    res += numDistinct(s.substring(0, s.length - 1), t.substring(0, t.length - 1));
  }

  return res;
};
