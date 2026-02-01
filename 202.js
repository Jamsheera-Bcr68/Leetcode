var isHappy = function (n) {
  let s = n.toString();

  while (s.length > 1) {
    let sum = s
      .split("")
      .map((val) => parseInt(val))
      .reduce((acc, val) => acc + val * val, 0);
      console.log('sum ',sum);
      
    if (sum == 1) return true;

    s = sum.toString();
  }
  return false;
};
let n = 19;
console.log(isHappy(n));
