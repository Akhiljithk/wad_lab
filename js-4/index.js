var input = window.prompt("enter a 4 digit number");

input = input.split("");

var digit1 = parseInt(input[0]);
var digit2 = parseInt(input[1]);
var digit3 = parseInt(input[2]);
var digit4 = parseInt(input[3]);

digit1 = parseInt(digit1 + 7);
digit2 = parseInt(digit2 + 7);
digit3 = parseInt(digit3 + 7);
digit4 = parseInt(digit4 + 7);

digit1 = parseInt(digit1 % 10);
digit2 = parseInt(digit2 % 10);
digit3 = parseInt(digit3 % 10);
digit4 = parseInt(digit4 % 10);

var temp = 0;
var temp1 = 0;

temp = digit1;
digit1 = digit3;
digit3 = temp;

temp1 = digit2;
digit2 = digit4;
digit4 = temp1;

console.log(digit1, digit2, digit3, digit4);