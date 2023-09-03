let firstNumber = 0;
let secondNumber = 0;
let firstOperator = ["+", "-", "*", "/"];
let secondOperator = ["+", "-", "*", "/"];

let display = document.getElementById("display");
let btnNumber = document.querySelectorAll("#number");
let btnOperator = document.querySelectorAll("#operator");
let btnAC = document.getElementById("allClear");
let btnEqual = document.getElementById("equal");
let displayValue = [];

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function btnCalculator() {
  btnNumber.forEach((btn) => {
    btn.addEventListener("click", () => {
      display.textContent += btn.value;
      displayValue.push(btn.value);
    });
  });
  btnOperator.forEach((btn) => {
    btn.addEventListener("click", () => {
      display.textContent += btn.value;
      displayValue.push(btn.value);
    });
  });
  btnAC.addEventListener("click", () => {
    displayValue = [];
    display.textContent = "";
  });
  btnEqual.addEventListener("click", equal);
}

function equal() {
  let input = display.textContent;
  let fields = input.split(/[+\-*/]/);
  let operator = input.match(/[+\-*/]/)[0];
  let firstNumber = fields[0];
  let secondNumber = fields[1];
  let newDisplay = operate(operator, Number(firstNumber), Number(secondNumber));
  display.textContent = newDisplay;
  displayValue.push(newDisplay);
  let oldNum = newDisplay;
}
btnCalculator();

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
      break;
    case "-":
      return subtract(firstNumber, secondNumber);
      break;
    case "*":
      return multiply(firstNumber, secondNumber);
      break;
    case "/":
      return divide(firstNumber, secondNumber);
  }
}
