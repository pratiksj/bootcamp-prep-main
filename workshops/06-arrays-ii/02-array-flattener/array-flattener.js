// YOUR CODE BELOW
function arrayFlattener(twoDimention) {
  debugger;
  let flatArray = [];
  for (let i = 0; i < twoDimention.length; i++) {
    if (Array.isArray(twoDimention[i])) {
      for (let j = 0; j < twoDimention[i].length; j++) {
        //j ko loop ma yedi second dimention aayo vane matra ko loop ma janxa
        flatArray.push(twoDimention[i][j]);
      }
    } else {
      flatArray.push(twoDimention[i]);
    }
  }
  return flatArray;
}

console.log(arrayFlattener([1, [2, 3], 4]));
//console.log(flatArray.flat());
