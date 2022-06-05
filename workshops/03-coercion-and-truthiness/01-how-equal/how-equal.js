// YOUR CODE BELOW
function howEqual(a, b) {
  if (a === b) {
    return "strictly";
  } else if (a == b) {
    return "loosely";
  } else if (a !== b) {
    return "not equal";
  }
}
