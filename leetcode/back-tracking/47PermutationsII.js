/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [];
    let visited = [];
    let sortedNums = nums.sort((a, b) => { return a - b; })
    permuteHelper(sortedNums, res, visited);
    return res;
};

var permuteHelper = function (remains, res, visited) {
    if (!remains.length) {
        res.push(visited);
        return;
    }

    for (let j = 0; j < remains.length; j++) {
        if(j === remains.length - 1 || remains[j+1] !== remains[j]) {
            const newVisited = [...visited, remains[j]];
            const newRemains = [...remains.slice(0, j), ...remains.slice(j + 1)];
            permuteHelper(newRemains, res, newVisited);
        }
    }

}
