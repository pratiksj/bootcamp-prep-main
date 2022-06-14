// YOUR CODE BELOW
//let myArray = [1, [2, 3]];
//let copy = deeperCopy(myArray);
//copy[1].push(4);
function deeperCopy(myArray) {
  debugger;
  let result = [];
  for (let i = 0; i < myArray.length; i++) {
    let currVal = myArray[i];
    if (Array.isArray(currVal)) {
      let newArray = [];
      for (let j = 0; j < currVal.length; j++) {
        newArray.push(currVal[j]);
      }
      result.push(newArray);
    } else {
      result.push(currVal);
    }
  }

  return result;
}
let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]

let copy2 = myArray.slice();
copy2[1].push(4);

//console.log(myArray); // [1, [2, 3, 4]]
