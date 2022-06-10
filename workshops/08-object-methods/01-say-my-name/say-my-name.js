// YOUR CODE BELLOW
let me = {
  name: "kate",
  getGreeting: function () {
    //return `Hi, my name is${this.name}`;
    return "Hi," + " " + "my name is" + " " + this.name + ".";
  },
};
console.log(me.getGreeting("kate"));
