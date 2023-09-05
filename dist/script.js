let display = document.getElementById("display");
let btnNumber = document.querySelectorAll("#number");
let btnOperator = document.querySelectorAll("#operator");
let btnAC = document.getElementById("allClear");
let btnEqual = document.getElementById("equal");
let displayValue = [];
let displayNum = parseInt(display.textContent);

function btnCalculator() {
  btnNumber.forEach((btn) => {
    btn.addEventListener("click", () => {
      display.textContent += btn.value;
      displayNum = display.textContent;
      displayValue.push(btn.value);
    });
  });
  btnOperator.forEach((btn) => {
    btn.addEventListener("click", () => {
      operateClick(btn);
    });
  });
  btnAC.addEventListener("click", () => {
    displayValue = [];
    display.textContent = "";
  });
  btnEqual.addEventListener("click", equal);
}
function operateClick(btn) {
  let operatorClicked = btn.textContent;
  if (
    displayValue.length > 0 &&
    "+-*/".includes(displayValue[displayValue.length - 1])
  ) {
    displayValue[displayValue.length - 1] = operatorClicked;
    display.textContent = displayValue.join("");
  } else {
    display.textContent += operatorClicked;
    displayValue.push(operatorClicked);
  }
}

function equal() {
  let input = display.textContent;
  let fields = input.split(/[+\-*/]/);
  let operator = input.match(/[+\-*/]/)[0];
  let firstNumber = fields[0];
  let secondNumber = fields[1];
  let newDisplay = operate(
    operator,
    parseInt(firstNumber),
    parseInt(secondNumber)
  );
  display.textContent = newDisplay;
  displayValue.push(newDisplay);
  let oldNum = newDisplay;
}
btnCalculator();
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
