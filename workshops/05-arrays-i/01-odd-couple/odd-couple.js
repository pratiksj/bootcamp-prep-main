// YOUR CODE BELOW
function oddCouple(jas) {
  debugger;
  let bas = [];
  let count = 0;
  for (let i = 0; i < jas.length; i++) {
    // debugger;

    if (jas[i] % 2 === 1 && count < 2) {
      bas.push(jas[i]);
      count++;
    }
  }
  return bas;
}
console.log(oddCouple([3, 6, 9, 12, 15]));
console.log(oddCouple([2, 4, 6, 8])); // => []
