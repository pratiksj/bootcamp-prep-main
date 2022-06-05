// YOUR CODE BELOW
function taxCalculator(item, state) {
  if (state === "NY") {
    return item + item * 0.04;
  } else if (state === "NJ") {
    return item + item * 0.06625;
  }
}
//console.log(taxCalculator(100, "NJ"));
console.log(taxCalculator(100, "NY")); // => 104
