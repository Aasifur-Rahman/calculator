// var i = 5;

// while (i <= 10) {
//   document.write(" " + i);
//   i++;
// }

// var i = 1;
// var sum = 0;

// while (i <= 10) {
//   sum = sum + i;
//   i++;
// }

// document.write(sum);
// document.write("<h1>end</h1>");

var i = 1;
var sum = 0;

while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    sum = sum + i;
  }

  i++;
}

document.write(sum);
