/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    if (!dungeon.length || !dungeon[0].length)
        return 0;

    var rows = dungeon.length, cols = dungeon[0].length;
    var dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    dp[rows - 1][cols - 1] = Math.max(1, 1 - dungeon[rows - 1][cols - 1]);

    for (var r = rows - 1; r >= 0; r--) {
        for (var c = cols - 1; c >= 0; c--) {
            if (r === rows - 1 && c === cols - 1)
                continue;

            if (r !== rows - 1 && c !== cols - 1) {
                dp[r][c] = Math.max(1, Math.min(dp[r][c + 1], dp[r + 1][c]) - dungeon[r][c]);
            } else if (r === rows - 1) {
                dp[r][c] = Math.max(dp[r][c + 1] - dungeon[r][c], 1);
            } else {
                dp[r][c] = Math.max(dp[r + 1][c] - dungeon[r][c], 1);
            }
        }
    }

    return dp[0][0];
};
