// YOUR CODE BELOW
function myJoin(array, separator = ",") {
  let result = "";
  for (let i = 0; i < array.length - 1; i++) {
    let currVal = array[i];
    if (currVal === null || currVal === undefined) {
      currVal = "";
    }
    result = result + currVal + separator;
  }
  return result + array[array.length - 1];
}
let array = myJoin(["let's", "make", "a", "list"], " "); // => "let's make  a list"
console.log(array);
