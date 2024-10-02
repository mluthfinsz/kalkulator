const screen = document.getElementById("screen");
const keys = document.querySelector(".calculator-keys");
let currentInput = "";
let operator = "";
let previousInput = "";

keys.addEventListener("click", function (event) {
  const { target } = event;
  const { value } = target;

  if (!target.matches("button")) {
    return;
  }

  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
      operator = value;
      previousInput = currentInput;
      currentInput = "";
      break;
    case "%":
      currentInput = (parseFloat(currentInput) / 100).toString();
      break;
    case "^2":
      currentInput = (parseFloat(currentInput) ** 2).toString();
      break;
    case "=":
      if (operator && previousInput !== "" && currentInput !== "") {
        currentInput = eval(`${previousInput}${operator}${currentInput}`);
      }
      operator = "";
      previousInput = "";
      break;
    case "all-clear":
      currentInput = "";
      operator = "";
      previousInput = "";
      break;
    default:
      currentInput += value;
  }

  screen.value = currentInput;
});
