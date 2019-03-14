/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  if (stones[1] - stones[0] !== 1) return false;

  return helper(stones, 1, 1);
};

var helper = function (stones, idx, preJump) {
  if (idx === stones.length - 1) return true;

  for (let i = idx + 1; i < stones.length; i++) {
    let jump = stones[i] - stones[idx];
    if (jump > preJump + 1 || jump < preJump - 1) continue;
    if (helper(stones, i, jump)) return true;
  }

  return false;
};

/**
DP
dp[i][j]: Can frog jump from ith stone to jth stone?
If dp[i][j] = true, then current jump is stones[j] - stones[i] units
Available previous jump could be:

stones[j] - stones[i] - 1: 
target is ith stone, 
source stone's unit = stones[i] - (stones[j] - stones[i] - 1) = 2*stones[i] - stones[j] + 1

stones[j] - stones[i]:
target is ith stone, 
source stone's unit = stones[i] - (stones[j] - stones[i]) = 2*stones[i] - stones[j]

stones[j] - stones[i] + 1
target is ith stone, 
source stone's unit = stones[i] - (stones[j] - stones[i] + 1) = 2*stones[i] - stones[j] - 1
*/
var canCross = function (stones) {
  if (stones[1] - stones[0] !== 1) return false;

  for (let i = 1; i < stones.length; i++) {
    if (stones[i] - stones[i - 1] > i + 1) return false;
  }

  let dp = new Array(stones.length).fill(false).map(() => new Array(stones.length).fill(false));
  dp[0][0] = true;

  for (let i = 0; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      let preStone1 = stones.indexOf(2 * stones[i] - stones[j] + 1);
      if (preStone1 > -1) {
        dp[i][j] |= dp[preStone1][i];
      }

      let preStone2 = stones.indexOf(2 * stones[i] - stones[j]);
      if (preStone2 > -1) {
        dp[i][j] |= dp[preStone2][i];
      }

      let preStone3 = stones.indexOf(2 * stones[i] - stones[j] - 1);
      if (preStone3 > -1) {
        dp[i][j] |= dp[preStone3][i];
      }

      if (j === stones.length - 1 && dp[i][j]) return true;
    }
  }

  return false;

};
