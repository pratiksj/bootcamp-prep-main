// YOUR CODE BELOW
//makeGrid(3,4);
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/
function makeGrid(columns, row) {
  let result = [];
  for (let i = 0; i < row; i++) {
    //row le chai 4wota rows banayo
    let innerRow = [];
    for (let j = 0; j < columns; j++) {
      // columns le chai value put garyooo
      innerRow.push(j + 1);
    }
    result.push(innerRow);
  }

  return result;
}
