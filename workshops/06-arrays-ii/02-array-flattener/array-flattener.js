// YOUR CODE BELOW
function arrayFlattener(twoDimention) {
  let flatArray = [];
  for (let i = 0; i < twoDimention.length; i++) {
    //array vitra ko array lai flat garne tarika
    currVal = twoDimention[i];
    if (Array.isArray(currVal)) {
      /*for (let j = 0; j < currVal.length; j++) {
        flatArray.push(currVal[j]);
      }*/
      flatArray = flatArray.concat(currVal);
    } else {
      flatArray.push(currVal);
    }
  }

  return flatArray;
}

console.log(arrayFlattener([1, [2, 3], 4]));
//console.log(flatArray.flat());
