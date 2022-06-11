// YOUR CODE BELOW
//myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
function myLastIndexOf(array, searchValue, startIdx = array.length - 1) {
  let result = -1;
  for (let i = 0; i <= startIdx; i++) {
    let currVal = array[i];
    if (currVal === searchValue) {
      result = i;
    }
  }
  return result;
}

myLastIndexOf(["gee", "gee", "gee", "gee", "baby", "baby"], "gee"); // => 3
