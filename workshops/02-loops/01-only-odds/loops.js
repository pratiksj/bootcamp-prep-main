//console.log("hellow");
let sum = 30;
//for (let i = sum; i >= 0; i = i - 1) {
//console.log(i);
//}
// for (let i = 0; i <= sum; i = i + 1) {
// console.log(i);
// }
function onlyOdds(myNum) {
  for (let i = 0; i <= myNum; i = i + 1) {
    let oddnum = i % 2;
    if (1 === oddnum) {
      console.log(i);
    }
  }
}
onlyOdds(10);
