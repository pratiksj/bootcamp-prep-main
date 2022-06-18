let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
function attendanceCheck(day) {
  let result = [];
  for (let i = 0; i < classRoom.length; i++) {
    let currVal = classRoom[i];
    let person = "";
    let attandance = [];
    for (let key in currVal) {
      person = key;
      attandance = currVal[key];
    }
    for (let j = 0; j < attandance.length; j++) {
      let currDay = attandance[j];
      if (currDay[day]) {
        result.push(person);
      }
    }
  }

  return result;
}
