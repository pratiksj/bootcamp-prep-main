// YOUR CODE BELOW
function functionLogger(func, arg) {
  console.log("function starting");
  let result = func(arg);
  return result;
}
function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

console.log(result);
