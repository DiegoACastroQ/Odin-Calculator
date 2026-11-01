const buttonContainer = {
    buttonsContainer: {
        mainContainer: document.querySelector("#buttonsContainer"), 
        numberButtons: document.querySelector("#numericButtons"),
        operatorButtons: document.querySelector("#operatorButtons"),
        equalsButton: document.querySelector("#equalsButton"),
    },
    buttonGrid: [],
    buttonConfig: [
        { text: "9", type: "number" },
        { text: "8", type: "number" },
        { text: "7", type: "number" },
        { text: "6", type: "number" },
        { text: "5", type: "number" },
        { text: "4", type: "number" },
        { text: "3", type: "number" },
        { text: "2", type: "number" },
        { text: "1", type: "number" },
        { text: "0", type: "number" },
        { text: "/", type: "operator", id: "divideButton" },
        { text: "*", type: "operator", id: "multiplyButton" },
        { text: "C", type: "operator", id: "clearButton" },
        { text: "+", type: "operator", id: "addButton" },
        { text: "=", type: "operator", id: "equalButton" },
        { text: "-", type: "operator", id: "subtractButton" },
        { text: ".", type: "decimal", id: "decimalButton" },
    ],
};
const display = document.querySelector("#display");
const state = {
    currentInput: "",
    previousInput: "",
    operator: null,
    previousPress: null,
    result: null,
    cleared: false,
};
function clear() {
    state.cleared=true;
        state.currentInput = "";
        state.previousInput = "";
        state.operator = null;
        state.previousPress = null;
        display.textContent = "0";
        return;
}
function createButtons(btn) {
    let type = btn.type;

if (type === "number") {
        const button = document.createElement("button");
        button.textContent = btn.text;
        button.classList.add("numericButton");
        button.dataset.type = btn.type;
        buttonContainer.buttonsContainer.numberButtons.appendChild(button);
        buttonContainer.buttonGrid.push(button);

}
 else if (type === "operator") {
    if (btn.id === "equalButton") {
        const button = document.createElement("button");
            button.dataset.type = btn.type;
            button.id = btn.id;
            button.textContent = btn.text;
            button.classList.add("operatorButton");
            buttonContainer.buttonsContainer.equalsButton.appendChild(button);
            buttonContainer.buttonGrid.push(button); 
            return;
    }
            const button = document.createElement("button");
            button.dataset.type = btn.type;
            button.id = btn.id;
            button.textContent = btn.text;
            button.classList.add("operatorButton");
            buttonContainer.buttonsContainer.operatorButtons.appendChild(button);
            buttonContainer.buttonGrid.push(button);
        
    }
    else if (type === "decimal") {
        const button = document.createElement("button");
        button.dataset.type = btn.type;
        button.id = btn.id;
        button.textContent = btn.text;
        button.classList.add("decimalButton");
        buttonContainer.buttonsContainer.operatorButtons.appendChild(button);
        buttonContainer.buttonGrid.push(button);
        }

}
function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                alert("Error: Division by zero");
                return null;
            }
         
            return a / b;
        default:
            return null;
    }
}
function calculatorLogic(pressedButton) {
    if (pressedButton.type === "operator" && pressedButton.text === "C") {
        clear();
    }
switch (pressedButton.type) {
    case "number":
        if (state.previousInput !== "" && state.currentInput === "" && state.operator === null) {
        clear();
        display.textContent = pressedButton.text;
        state.currentInput += pressedButton.text;
        return pressedButton.text;
        }
        state.currentInput += pressedButton.text;
        if(display.textContent === "0") {
            display.textContent = pressedButton.text;
        } else {
            display.textContent += pressedButton.text;
        }
    return pressedButton.text;

    case "decimal":
        if (state.previousInput !== "" && state.currentInput === "" && state.operator === null) {
        clear();
        display.textContent = "0.";
        state.currentInput += "0.";
        return pressedButton.text;
        }
        if (!state.currentInput.includes(".")&& state.currentInput !== ""&& state.previousPress !== "operator") {
            display.textContent += pressedButton.text;
            return state.currentInput += pressedButton.text;
            
        }
        else if (state.currentInput === "" && state.previousPress !== "operator") {
           if(state.previousInput !== "") {
            display.textContent += "0.";
            return state.currentInput += "0.";
           }
            display.textContent += ".";
            return state.currentInput += "0.";
        }
        else if (state.previousPress === "operator") {
            state.currentInput = "0.";
            display.textContent += "0.";
            return;
        }

    return pressedButton.text;
    case "operator":
        if (state.currentInput === "" && state.previousInput === "") {
            return;
        }
        if (state.currentInput === "" && state.previousInput !== "") {
           
            if (pressedButton.text === "=") {   
                return;
            }
             if (state.operator !== null) {
                state.operator = pressedButton.text;
                display.textContent = display.textContent.slice(0, -3);
                display.textContent += ` ${pressedButton.text} `;
                return pressedButton.text;
            }
            state.operator = pressedButton.text;
           
            display.textContent += ` ${pressedButton.text} `;
            return pressedButton.text;
        }
        if (state.previousInput !== "" && state.currentInput !== "") {
            const previousInput = parseFloat(state.previousInput);
            const currentInput = parseFloat(state.currentInput);
            if(pressedButton.text === "=") {
                    const result = operate(previousInput, currentInput, state.operator);
                   if (result === null)  return;
                    const roundedResult=parseFloat(result.toFixed(3));
                    display.textContent = roundedResult;
                 state.previousInput = roundedResult.toString();
                 state.currentInput = "";
                 state.operator = null;
                 
             }else {
               const result = operate(previousInput, currentInput, state.operator);
               if (result === null) {
                return;
              }
               state.previousInput = result;
              state.currentInput = "";
             display.textContent += ` ${pressedButton.text} `;
             state.operator = pressedButton.text;
            }

         return pressedButton.text;
        }
    }
        if (state.previousInput === "" && state.currentInput !== "") {
        if (pressedButton.text === "=") {
            return;


        }
    }
       display.textContent += ` ${pressedButton.text} `;
        state.previousInput = state.currentInput;
        state.currentInput = "";
        state.operator = pressedButton.text;
    return pressedButton.text;
};
  
buttonContainer.buttonConfig.map(createButtons);
buttonContainer.buttonsContainer.mainContainer.addEventListener("click",(e) => {
    if (e.target.tagName !== "BUTTON") {
        return;
    }
 calculatorLogic({ text: e.target.textContent,
     type: e.target.dataset.type,
      id: e.target.id });
      if(state.previousPress === null&& state.cleared=== true) {
        state.cleared = false;
        return;
      }
      state.previousPress = e.target.dataset.type;

   
});






