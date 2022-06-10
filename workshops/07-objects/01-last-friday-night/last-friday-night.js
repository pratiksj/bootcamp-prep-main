// YOUR CODE BELOW
function lastFridayNight(transactions) {
  let totalSum = 0;
  for (let i = 0; i < transactions.length; i++) {
    let currentValue = transactions[i];
    let currentAmount = currentValue.amount;
    totalSum = totalSum + currentAmount;
  }
  //console.log(totalSum);

  return totalSum;
}
// let transactions = [
//   {
//     name: "Tons of glitter",
//     amount: 70,
//   },
//   {
//     name: "Porcelain Pink Flamingos",
//     amount: 92,
//   },
//   {
//     name: "Chandelier replacement",
//     amount: 10000,
//   },
//   {
//     name: "Dinner at TGIF x6",
//     amount: 350,
//   },
console.log(lastFridayNight[totalSum]);
