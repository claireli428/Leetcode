/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let start = 0, globalTank = 0, greedyTank = 0;

    for(let i = 0; i < gas.length; i++) {
        let remain = gas[i] - cost[i];
        globalTank += remain;

        if(remain >= 0) {
            if(greedyTank === 0) start = i;
            greedyTank += remain;
        } else {
            greedyTank = Math.max(0, greedyTank + remain);
        }
    }

    return globalTank < 0 ? -1 : start;
};