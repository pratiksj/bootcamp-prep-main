// YOUR CODE BELOW
function evenAndOdd(Array) {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] % 2 === 0) {
      evenArray.push(Array[i]);
    } else {
      oddArray.push(Array[i]);
    }
  }
  return [evenArray, oddArray];
}

//console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
//console.log(firstElement[i]);
