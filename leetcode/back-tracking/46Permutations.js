/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let visited = [];
    permuteHelper(nums, res, visited);
    return res;
};

var permuteHelper = function(remains, res, visited) {
    if(!remains.length) {
        res.push(visited);
        return;
    }

    for(let j = 0; j < remains.length; j++) {
        visited.push(remains[j]);
        const newRemains = [...remains.slice(0, j), ...remains.slice(j + 1)];
        permuteHelper(newRemains, res, visited.slice(0));
        visited.pop();
    }

}
