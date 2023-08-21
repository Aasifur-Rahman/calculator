// digit spelling
//0 - zero, 1 - one..........9- Nine, 10 - Not a valid digit

// switch, case , break, default

// var digit = prompt("Enter any Digit");

// switch (digit) {
//   case "0":
//     document.write("Zero");
//     break;
//   case "1":
//     document.write("<br> One ");
//     break;
//   case "2":
//     document.write("<br> Two ");
//     break;
//   case "3":
//     document.write("<br> Three ");
//     break;
//   case "4":
//     document.write("<br> Four ");
//     break;
//   case "5":
//     document.write("<br> Five ");
//     break;
//   case "6":
//     document.write("<br> Six ");
//     break;
//   case "7":
//     document.write("<br> Seven ");
//     break;
//   case "8":
//     document.write("<br> Eight ");
//     break;
//   case "9":
//     document.write("<br> Nine ");
//     break;
//   default:
//     document.write("Not a Digit");
// }

// if (digit == 0) {
//   document.write("Zero");
// } else if (digit == 1) {
//   document.write("One");
// } else if (digit == 2) {
//   document.write("Two");
// } else if (digit == 3) {
//   document.write("Three");
// } else if (digit == 4) {
//   document.write("Four");
// } else if (digit == 5) {
//   document.write("Five");
// } else if (digit == 6) {
//   document.write("Six");
// } else if (digit == 7) {
//   document.write("Seven");
// } else if (digit == 8) {
//   document.write("Eight");
// } else if (digit == 9) {
//   document.write("Nine");
// } else {
//   document.write("Not a Valid Number");
// }

//Task 5

var text = prompt("Enter a letter :");
var letter = text.toLowerCase();

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    document.write(letter + " is a vowel");
    break;

  default:
    document.write(letter + " is consonant");
}
