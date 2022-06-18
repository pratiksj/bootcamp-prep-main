// YOUR CODE BELOW
function frequencyAnalysis(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let currVal = str[i].toLowerCase();
    if (currVal in result) {
      result[currVal]++;
    } else {
      result[currVal] = 1;
    }
  }
  return result;
}
