// YOUR CODE BELOW
let you = {
  //name: "Alyssa",
  name: "",
};
let me2 = {
  //name: "Tarana",
  name: "",
  getGreeting: function (you) {
    return `Hi ${you.name}, my name is ${this.name}.`;
  },
};
me2.name = "Tarana";

//console.log(me2.getGreeting(you)); //object ko name key ma value rakhyo vane chai
console.log(me2.getGreeting({ name: "Alyssa" })); // Yedi object ko key ma value rakhena vane
