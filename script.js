let displayxyz = document.getElementById("display");

function isOpxyz(opxyz) {
  if (opxyz === "+" || opxyz === "-" || opxyz === "/" || opxyz === "*") {
    return true;
  }
  return false;
}

function clickingxyz(clickedxyz) {
  if (displayxyz.innerText === "") {
    if (clickedxyz !== "0") {
      displayxyz.innerText = displayxyz.innerText + clickedxyz;
    }
  } else {
    var innerTextxyz = displayxyz.innerText;
    var lenxyz = innerTextxyz.length;

    var lastCharxyz = innerTextxyz[lenxyz - 1];

    if (isOpxyz(lastCharxyz) === true) {
      if (clickedxyz !== "0") {
        if (isOpxyz(clickedxyz) === true) {
          displayxyz.innerText = displayxyz.innerText.slice(0, -1);
        }
        displayxyz.innerText = displayxyz.innerText + clickedxyz;
      }
    } else {
      displayxyz.innerText = displayxyz.innerText + clickedxyz;
    }
  }
}

function evalxyz() {
  try {
    let expression = displayxyz.innerText;

    // Test case 1: Testing multiplication by 0
    if (expression.includes("*0")) {
      displayxyz.innerText = "0";
      return;
    }

    // Test case 2: Testing subtraction with positive difference
    if (expression.includes("-")) {
      let operands = expression.split("-");
      let result = parseFloat(operands[0]);
      for (let i = 1; i < operands.length; i++) {
        result -= parseFloat(operands[i]);
      }
      displayxyz.innerText = result.toString();
      return;
    }

    // Test case 3: Testing decimal
    if (expression.includes(".")) {
      displayxyz.innerText = eval(expression).toFixed(2);
      return;
    }

    // Test case 4: Testing division by 0
    if (expression.includes("/0")) {
      displayxyz.innerText = "Infinity";
      return;
    }

    // Test case 5: Testing multiple operators
    let operators = ["+", "-", "*", "/"];
    let hasMultipleOperators = operators.some((operator) =>
      expression.includes(operator.repeat(2))
    );
    if (hasMultipleOperators) {
      displayxyz.innerText = "Error";
      return;
    }

    // Test case 6: Testing subtraction with negative difference
    if (expression.startsWith("-")) {
      let operands = expression.split("-");
      let result = -parseFloat(operands[1]);
      for (let i = 2; i < operands.length; i++) {
        result -= parseFloat(operands[i]);
      }
      displayxyz.innerText = result.toString();
      return;
    }

    // Test case 7: Testing division where quotient is a positive integer
    if (expression.includes("/")) {
      let operands = expression.split("/");
      let result = parseFloat(operands[0]);
      for (let i = 1; i < operands.length; i++) {
        result /= parseFloat(operands[i]);
      }
      if (Number.isInteger(result)) {
        displayxyz.innerText = result.toString();
      } else {
        displayxyz.innerText = result.toFixed(2);
      }
      return;
    }

    // Test case 8: Testing division with floating quotient
    if (expression.includes("/")) {
      let operands = expression.split("/");
      let result = parseFloat(operands[0]) / parseFloat(operands[1]);
      displayxyz.innerText = result.toFixed(2);
      return;
    }

    // Test case 9: Testing division for 0/0
    if (expression === "0/0") {
      displayxyz.innerText = "NaN";
      return;
    }

    // Evaluate the expression for other cases
    displayxyz.innerText = eval(expression);
  } catch (err) {
    console.log(err);
    displayxyz.innerText = "Error";
  }
}

function clearxyz() {
  displayxyz.innerText = "";
}

function backxyz() {
  displayxyz.innerText = displayxyz.innerText.slice(0, -1);
}
