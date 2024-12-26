const input = document.getElementById("input");
const del = document.getElementById("Del");
const equal = document.getElementById("equal");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zer");
const multiply = document.getElementById("multiply");
const firstBracket = document.getElementById("firstBracket");
const secondBracket = document.getElementById("secondBracket");
const sin = document.getElementById("sin");
const cos = document.getElementById("cos");
const tan = document.getElementById("tan");
const ac = document.getElementById("add");
const decimal = document.getElementById("decimal");
const percentage = document.getElementById("percentage");
const pie = document.getElementById("pie");
const logaritm = document.getElementById("log");
const square = document.getElementById("square");
const e = document.getElementById("e");

minus.addEventListener("click", (e) => {
  input.value += "-";
});
plus.addEventListener("click", (e) => {
  input.value += "+";
});
one.addEventListener("click", (e) => {
  input.value += "1";
});
two.addEventListener("click", (e) => {
  input.value += "2";
});
three.addEventListener("click", (e) => {
  input.value += "3";
});
four.addEventListener("click", (e) => {
  input.value += "4";
});
five.addEventListener("click", (e) => {
  input.value += "5";
});
six.addEventListener("click", (e) => {
  input.value += "6";
});
seven.addEventListener("click", (e) => {
  input.value += "7";
});
eight.addEventListener("click", (e) => {
  input.value += "8";
});
nine.addEventListener("click", (e) => {
  input.value += "9";
});
zero.addEventListener("click", (e) => {
  input.value += "0";
});
decimal.addEventListener("click", (e) => {
  input.value += ".";
});
multiply.addEventListener("click", (e) => {
  input.value += "*";
});
divide.addEventListener("click", (e) => {
  input.value += "/";
});

percentage.addEventListener("click", (e) => {
  let ex = input.value;
  input.value = eval(ex) / 100;
});
ac.addEventListener("click", (e) => {
  input.value = ""
});
equal.addEventListener("click", (e) => {
  let ex = input.value
  input.value = eval(ex)
});
sin.addEventListener("click", (e) => {
  let ex = input.value
  input.value = Math.sin(ex)
});
cos.addEventListener("click", (e) => {
  let ex = input.value
  input.value = Math.cos(ex)
});
tan.addEventListener("click", (e) => {
  let ex = input.value
  input.value = Math.tan(ex)
});
pie.addEventListener("click", (e) => {
  let ex = input.value
  input.value = Math.PI * ex
});
// let number = Math.PI(2)
// console.log(number)
square.addEventListener("click", (e) => {
  let ex = input.value
  input.value = eval(ex ** 2)
 
});
del.addEventListener("click", (e) => {
  let di = input.value 
  input.value = di.slice(0, di.length-1)
  // input.value = "";
});