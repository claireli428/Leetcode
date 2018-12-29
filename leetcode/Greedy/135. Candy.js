/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if(!ratings.length) return 0;

    let candies = 1, upCnt = 1, downCnt = 0;
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] >= ratings[i-1]) {
            if(downCnt > 0) {
                candies += downCnt * (downCnt + 1) / 2;
                if(downCnt + 1 > upCnt) candies += downCnt + 1 - upCnt;
                downCnt = 0;
                upCnt = 1;
            }
            upCnt = ratings[i] === ratings[i-1] ? 1 : upCnt + 1;
            candies += upCnt;
        } else if(ratings[i] < ratings[i-1]) {
            downCnt++;
        }
    }

    if(downCnt > 0) {
        candies += downCnt * (downCnt + 1) / 2;
        if(downCnt + 1 > upCnt) candies += downCnt + 1 - upCnt;
    }

    return candies;

};