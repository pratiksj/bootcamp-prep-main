// YOUR CODE BELOW
//myReverse([1, 2, 3]);    // => [3, 2, 1]

function myReverse(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    let currVal = array[i];
    newArray.push(currVal);
  }

  return newArray;
}
// let newArray = myReverse([1, 2, 3]); // => [3, 2, 1]
// console.log(newArray);
