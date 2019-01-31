/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  let total = 0, max = 0;
  needs.map((e, i) => {
    max += e * price[i]
    total += e;
  });
  return helper(price, special, needs, total, max);
};

var helper = function (price, special, needs, count, max) {
  console.log(needs, count);
  if (count === 0) return 0;

  let n = needs.length;
  let res = max;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < special.length; j++) {
      if (special[j][i] !== 0 && isOfferValid(special[j], needs)) {
        let newCount = 0;
        let newNeeds = needs.map((e, k) => {
          newCount += e - special[j][k];
          return e - special[j][k];
        });
        res = Math.min(res, special[j][n] + shoppingOffers(price, special, newNeeds, newCount, max));
      }
    }
  }

  return res;
};

var isOfferValid = function (offer, list) {
  for (let i = 0; i < offer.length; i++) {
    if (offer[i] > list[i]) return false;
  }

  return true;
};
