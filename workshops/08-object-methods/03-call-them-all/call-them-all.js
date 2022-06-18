// YOUR CODE BELOW
function callThemAll(objects, val) {
  debugger;
  let result = [];
  for (let key in objects) {
    let currVal = objects[key];
    if (typeof currVal === "function") {
      result.push(currVal(val));
    }
  }
  return result;
}
let addsNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};

console.log(callThemAll(addsNums, 100)); // => [110, 120]
