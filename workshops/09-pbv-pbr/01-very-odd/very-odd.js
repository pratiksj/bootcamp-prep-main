// YOUR CODE BELOW
function veryOdd(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    if (currVal % 2 === 1) {
      newArray.push(currVal);
    }
  }

  return newArray;
}
