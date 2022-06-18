// YOUR CODE BELOW
function dogBreeder(name = "Steve", age = 0) {
  let newDog = { name, age };
  //   newDog["name"] = name;
  //   newDog["age"] = age;
  if (typeof name === "number") {
    newDog.age = name;
    newDog.name = "Steve";
  }
  return newDog;
}
