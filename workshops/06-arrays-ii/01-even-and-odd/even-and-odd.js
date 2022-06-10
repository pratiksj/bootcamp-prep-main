// YOUR CODE BELOW
function evenAndOdd(orginalArray) {
  let oddArray = []; //array vitra array banauda suruma duewota array banaunu parxa.
  //array vitra array banauda suruma duewota array banaunu parxa.
  let evenArray = [];
  for (let i = 0; i < orginalArray.length; i++) {
    if (orginalArray[i] % 2 === 0) {
      //let firstElement = orginalArray;
      oddArray.push(orginalArray[i]);
      //console.log(firstElement[i]);
    } else {
      evenArray.push(orginalArray[i]);
    }
  }
  return [oddArray, evenArray]; //array vitra arko array banauna suruma thulo bracket rakhnuparxa
}
console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
//console.log(firstElement[i]);
