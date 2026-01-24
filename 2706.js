var buyChoco = function (prices, money) {
  let map = new Map();
  for (let i = 0; i < prices.length; i++) {
    let pr = prices[i];
    if (pr > money) continue;

    let bal = money - pr;
    
    for (let key in map) {
        console.log('bal ',bal);
    
      if (map[key] <= bal) {
        money = money - (map[key] + pr);
        console.log("money ", money);
      }
    }
    map.set(i, pr);
    console.log(map);
  }
  return money;
};
let prices = [1, 2, 2];
let money = 3;
console.log(buyChoco(prices, money));
