// YOUR CODE BELOW
function myOr(x, y, z) {
  let myname = x || y || z;
  return myname;
  if (x) {
    return x;
  }

  if (y) {
    return y;
  }
  if (z) {
    return z;
  } else return z;
}
function myAnd(a, b, c) {
  //   let island = a && b && c;
  //   return island;
  if (a) {
  } else {
    return a;
  }
  if (!b) {
    return b;
  } else {
  }

  if (!c) {
    return c;
  } else return c;
}

let val = myAnd("a", 0, false);
console.log(val);
