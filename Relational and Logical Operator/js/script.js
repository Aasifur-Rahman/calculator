// var num = 5;

// if (num % 2 !== 0) {
//   document.write("Even");
// } else {
//   document.write("Odd");
// }

// var num = -6;

// if (num > 0) {
//   document.write("Positive");
// } else if (num < 0) {
//   document.write("Negative");
// } else {
//   document.write("Zero");
// }

//task 4

// var mark = parseInt(prompt("Enter your result Mark :"));

// if (mark <= 100 && mark >= 80) {
//   document.write("<h3>Congratulations! You have passed the exam With A+</h3>");
// } else if (mark <= 79 && mark >= 70) {
//   document.write("<h3>You Have Passed The Exam with A</h3>");
// } else if (mark <= 69 && mark >= 60) {
//   document.write("<h3> You Have Passed The Exam with -A </h3> ");
// } else if (mark <= 59 && mark >= 50) {
//   document.write("<h3>You Have Passed The Exam with B </h3>");
// } else if (mark <= 49 && mark >= 45) {
//   document.write("<h3>You Have Passed The Exam with C </h3>");
// } else if (mark <= 45 && mark >= 40) {
//   document.write("<h3>You Have Passed The Exam with -C </h3>");
// } else if (mark <= 39 && mark >= 33) {
//   document.write("<h3>You Have Passed The Exam with D </h3>");
// } else {
//   alert("You have Failed The exam");
// }

// Vowel / Consonant

var letter = prompt("Enter a letter : ");

if (
  letter == "a" ||
  letter == "e" ||
  letter == "i" ||
  letter == "o" ||
  letter == "u"
) {
  console.log(`${letter} is vowel`);
} else {
  console.log(` ${letter} is consonant `);
}
