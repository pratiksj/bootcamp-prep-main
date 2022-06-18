let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];
// YOUR CODE BELOW
function leetTranslator(string) {
  let result = "";
  let leetCodex = {};
  console.log(letters.length);
  for (let i = 0; i < letters.length; i++) {
    let currVal = letters[i];
    let leetVar = leetChars[i];
    leetCodex[currVal] = leetVar;
  }
  for (let i = 0; i < string.length; i++) {
    let newStr = string[i].toLowerCase();
    let newResult = leetCodex[newStr];
    result += newResult;
  }
  return result;
}
