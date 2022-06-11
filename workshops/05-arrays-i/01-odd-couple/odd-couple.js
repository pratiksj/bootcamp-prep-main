// YOUR CODE BELOW
//oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
function oddCouple(array) {
  let newArray = [];
  debugger;
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    if (currVal % 2 === 1) {
      newArray.push(currVal);
    }
    if (newArray.length === 2) {
      break;
    }
  }
  return newArray;
}
let newArray = oddCouple([1, 2, 3, 4, 5]);

//console.log(oddCouple([1, 2, 3, 4, 5]));
console.log(newArray);
