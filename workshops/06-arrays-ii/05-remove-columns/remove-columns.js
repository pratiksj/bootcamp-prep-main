// YOUR CODE BELOW
/*removeColumns([[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]], 2);
/* => [[1],
[1],
[1],
[1]]
*/
function removeColumns(originalGrid, numColumns) {
  let result = [];
  for (let i = 0; i < originalGrid.length; i++) {
    currVal = originalGrid[i];
    let innerColumn = [];
    for (let j = 0; j < currVal.length - numColumns; j++) {
      innerColumn.push(currVal[j]);
    }
    result.push(innerColumn);
  }

  return result;
}
