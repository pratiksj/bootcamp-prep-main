// YOUR CODE BELOW
function zooInventory(newArray) {
  let result = [];
  for (let i = 0; i < newArray.length; i++) {
    let currVal = newArray[i];
    let name = currVal[0];
    let animal = currVal[1][0];
    let age = currVal[1][1];
    let sentence = `${name} the ${animal} is ${age}.`;
    result.push(sentence);
  }
  return result;
}
