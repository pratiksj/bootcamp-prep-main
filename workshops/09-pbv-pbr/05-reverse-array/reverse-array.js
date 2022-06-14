// YOUR CODE BELOW
function reverseArray(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    let currVal = array[i];
    result.push(currVal);
  }
  for (let i = 0; i < result.length; i++) {
    array[i] = result[i];
  }

  return result;
}
