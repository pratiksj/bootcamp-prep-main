let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 }, //meroo questio yesma cha kii secVal yane hard test shell laii kasari dot lagayera access garyoo despite curly braces
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function () {
  let totalValue = 0;
  for (let key in this) {
    let fistVal = this[key];
    for (let ikey in fistVal) {
      let secVal = fistVal[ikey];
      totalValue += secVal.cost * secVal.quantity;
    }
  }
  return totalValue;
};
tacoCatInc.sale = function (order) {
  let price = 0;
  for (let key in order) {
    let currVal = order[key];
    let item = this[key][currVal];
    price += item.cost;
    item.quantity--;
  }
  this.cash += price;
  return price;
};
