/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  return !(rec2[1] >= rec1[3] || rec2[3] <= rec1[1] || rec2[2] <= rec1[0] || rec2[0] >= rec1[2]);
};

var isRectangleOverlap = function (rec1, rec2) {
  let projX1 = { min: rec1[0], max: rec1[2] }, projY1 = { min: rec1[1], max: rec1[3] };
  let projX2 = { min: rec2[0], max: rec2[2] }, projY2 = { min: rec2[1], max: rec2[3] };
  return !(projX2.min >= projX1.max || projX2.max <= projX1.min || projY2.min >= projY1.max || projY2.max <= projY1.min);
};
