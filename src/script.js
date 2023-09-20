let display = document.getElementById("display");
let displayValue = ["0"];

const btnNumbers = document.querySelectorAll(".number");
const btnOperators = document.querySelectorAll(".operator");
const btnAllClear = document.getElementById("allClear");
const btnDel = document.getElementById("del");
const btnPeriod = document.getElementById("period");
const btnEqual = document.getElementById("equal");

function btnFunc() {
  btnAllClear.addEventListener("click", () => {
    display.textContent = "0";
    displayValue = [];
  });
  btnDel.addEventListener("click", () => {
    let str = display.textContent;
    display.textContent = str.slice(0, str.length - 1);
    displayValue.pop();
  });
  btnPeriod.addEventListener("click", () => {
    const operatorRegex = /[+\-*/]/g;
    let val = display.textContent.split(operatorRegex);
    let n1 = val[0];
    let n2 = val[1];
    if (!n1.includes(".") || !n2.includes(".")) {
      display.textContent += btnPeriod.value;
      displayValue.push(btnPeriod.value);
    }
  });
  btnNumbers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const clickedButton = btn.value;
      if (display.textContent === "0") {
        display.textContent = clickedButton;
        displayValue = [clickedButton];
      } else if (display.textContent.length < 9) {
        display.textContent += btn.value;
        displayValue.push(btn.value);
      }
    });
  });
  btnOperators.forEach((btn) => {
    btn.addEventListener("click", () => {
      let operatorClicked = btn.value;
      if (
        displayValue.length < 9 &&
        "+-*/".includes(displayValue[displayValue.length - 1])
      ) {
        displayValue[displayValue.length - 1] = operatorClicked;
        display.textContent = displayValue.join("");
      } else {
        display.textContent += operatorClicked;
        displayValue.push(operatorClicked);
        const operatorRegex = /[+\-*/]/g;
        let input = display.textContent;
        let prevOperator = input.match(operatorRegex)[0];
        let currentOperator = input.match(operatorRegex)[1];
        let fields = input.split(operatorRegex);
        let firstNum = fields[0];
        let secondNum = fields[1];
        if (prevOperator && currentOperator) {
          let result = operate(
            prevOperator,
            parseFloat(firstNum),
            parseFloat(secondNum)
          );
          prevOperator = currentOperator;
          firstNum = result;
          secondNum = "";
          display.textContent = firstNum + prevOperator;
          displayValue = [];
          displayValue.push(firstNum, prevOperator);
        }
      }
    });
  });
  btnEqual.addEventListener("click", equal);
}
btnFunc();

function equal() {
  const operatorRegex = /[+\-*/]/g;
  let input = display.textContent;
  let fields = input.split(operatorRegex);
  let operator = input.match(operatorRegex)[0];
  let firstNum = fields[0];
  let secondNum = fields[1];
  let result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
  display.textContent = result;
  displayValue = [];
  displayValue.push(result);
}

function operate(operator, firstNum, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
      break;
    case "-":
      return subtract(firstNum, secondNum);
      break;
    case "*":
      return multiply(firstNum, secondNum);
      break;
    case "/":
      if (secondNum === 0) {
        return "ERROR";
      }
      return divide(firstNum, secondNum);
    default:
      return "ERROR";
  }
}
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
