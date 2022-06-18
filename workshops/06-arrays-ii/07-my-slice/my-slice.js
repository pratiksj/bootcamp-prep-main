// YOUR CODE BELOW
//mysplice([1, 2, 3], 1); // => [2, 3]
function mySlice(Array, startIdx = 0, endIdx = Array.length) {
  let result = [];
  if (startIdx < 0) {
    startIdx = startIdx + Array.length;
  }
  if (endIdx < 0) {
    endIdx = endIdx + Array.length;
  }
  for (let i = startIdx; i < endIdx; i++) {
    let currVal = Array[i];
    result.push(currVal);
  }

  return result;
}
