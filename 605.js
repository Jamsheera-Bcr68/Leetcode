// var canPlaceFlowers = function (flowerbed, n) {
//   let l = flowerbed.length;
//   for (let i = 0; i < l; i++) {
//     if (i == l - 1 && flowerbed[i] == 0 && flowerbed[i - 1] == 0) n--;
//     else if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1]==0) {
//       console.log(`i ${i} n ${n}`);

//       n--;
//       i++;
//     }
//   }
//   return n <= 0;
// };

var canPlaceFlowers=(flowerbed,n)=>{
for(let i=0;i<flowerbed.length&&n!==0;i++){
    if(flowerbed[i]==0&&flowerbed[i-1]!==1){}
}
}
let flowerbed = [1, 0, 0, 0, 0, 0, 1];
let n = 2;
console.log(canPlaceFlowers(flowerbed, n));