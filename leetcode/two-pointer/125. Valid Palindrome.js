/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    let lc = s.charCodeAt(l), rc = s.charCodeAt(r);

    if (lc < 48 || (lc > 57 && lc < 65) || (lc > 90 && lc < 97) || lc > 122) {
      l++;
    }
    else if (rc < 48 || (rc > 57 && rc < 65) || (rc > 90 && rc < 97) || rc > 122) {
      r--;
    }
    else {
      let diff = Math.abs(lc - rc);
      let isBothAlph = lc >= 65 && rc >= 65;
      if (diff !== 0 && (!isBothAlph || diff !== 32)) return false;
      l++;
      r--;
    }
  }
  return true;
};
