/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  if (words.length <= 2) return [];

  words.sort((a, b) => a.length - b.length);
  let minLen = words[0].length;
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > minLen && words[i].length >= minLen * 2 && isConcatenated(words.slice(0, i), words[i], minLen))
      res.push(words[i]);
  }

  return res;
};

var isConcatenated = function (dict, word, minLen) {
  let dp = new Array(word.length + 1).fill(false);
  dp[0] = true;

  for (let i = minLen; i <= word.length; i++) {
    for (let j = i - minLen; j >= 0; j--) {
      if (dp[j] && dict.includes(word.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[word.length];
};

// var isConcatenated = function (dict, word, minLen) {
//   if (dict.includes(word)) return true;

//   for (let l = minLen; l <= word.length - minLen; l++) {
//     let left = word.substring(0, l);
//     let right = word.substring(l);
//     if (dict.includes(left)) {
//       if (isConcatenated(dict, right, minLen)) return true;
//     }
//   }

//   return false;
// };
