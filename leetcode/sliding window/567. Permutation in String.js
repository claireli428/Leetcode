/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let dict = new Map();
    for (let i = 0; i < s1.length; i++) {
        dict.has(s1[i]) ? dict.set(s1[i], dict.get(s1[i]) + 1) : dict.set(s1[i], 1);
    }
    let counter = dict.size;

    let left = 0, right = 0;
    while (right < s2.length) {
        if (dict.has(s2[right])) {
            dict.set(s2[right], dict.get(s2[right]) - 1);
            if (dict.get(s2[right]) === 0) {
                counter--;
                while (counter === 0) {
                    if (right - left + 1 === s1.length) return true;

                    if (dict.has(s2[left])) {
                        dict.set(s2[left], dict.get(s2[left]) + 1);
                        if (dict.get(s2[left]) > 0) counter++;
                    }
                    left++;
                }
            }
        }
        right++;
    }

    return false;
};
