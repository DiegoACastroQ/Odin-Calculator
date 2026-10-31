const buttonContainer = {
    buttonsContainer: {
        mainContainer: document.querySelector("#buttonsContainer"), 
        numberButtons: document.querySelector("#numericButtons"),
        operatorButtons: document.querySelector("#operatorButtons"),
        decimalButton: document.querySelector("#decimalButton"),
    },
    buttonGrid: [],
    buttonConfig: [
        { text: "0", type: "number" },
        { text: "1", type: "number" },
        { text: "2", type: "number" },
        { text: "3", type: "number" },
        { text: "4", type: "number" },
        { text: "5", type: "number" },
        { text: "6", type: "number" },
        { text: "7", type: "number" },
        { text: "8", type: "number" },
        { text: "9", type: "number" },
        { text: "/", type: "operator", id: "divideButton" },
        { text: "*", type: "operator", id: "multiplyButton" },
        { text: "-", type: "operator", id: "subtractButton" },
        { text: "+", type: "operator", id: "addButton" },
        { text: "=", type: "operator", id: "equalsButton" },
        { text: "C", type: "operator", id: "clearButton" },
        { text: ".", type: "decimal", id: "decimalButton" },
    ],
};
const display = document.querySelector("#display");
let displayValue = "";
const state = {
    currentInput: "",
    previousInput: "",
    operator: null,
    previousOperator: null,
    result: null,
};
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
        buttonContainer.buttonsContainer.decimalButton.appendChild(button);
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
        state.currentInput = "";
        state.previousInput = "";
        state.operator = null;
        state.previousOperator = null;
        display.textContent = "0";
        return;
    }
switch (pressedButton.type) {
    case "number":
        state.currentInput += pressedButton.text;
        if(display.textContent === "0") {
            display.textContent = pressedButton.text;
        } else {
            display.textContent += pressedButton.text;
        }
    return pressedButton.text;

    case "decimal":
        if (!state.currentInput.includes(".")) {
            
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
                state.previousOperator = state.operator;
                display.textContent = display.textContent.slice(0, -3);
                display.textContent += ` ${pressedButton.text} `;
                return pressedButton.text;
            }
            state.operator = pressedButton.text;
            state.previousOperator = state.operator;
            display.textContent += ` ${pressedButton.text} `;
            return pressedButton.text;
        }
        if (state.previousInput !== "" && state.currentInput !== "") {
            const previousInput = parseFloat(state.previousInput);
            const currentInput = parseFloat(state.currentInput);
            if(pressedButton.text === "=") {
                const result = operate(previousInput, currentInput, state.operator);
                display.textContent = result;
                state.previousInput = result;
                state.currentInput = "";
                state.operator = null;
                state.previousOperator = null;
            }else {
            const result = operate(previousInput, currentInput, state.operator);
            state.previousInput = result;
            state.currentInput = "";
            display.textContent += ` ${pressedButton.text} `;
            state.operator = pressedButton.text;
            state.previousOperator = state.operator;
            }

         return pressedButton.text;
        }
       display.textContent += ` ${pressedButton.text} `;
        state.previousInput = state.currentInput;
        state.currentInput = "";
        state.operator = pressedButton.text;
    return pressedButton.text;
};
};
buttonContainer.buttonConfig.map(createButtons);
buttonContainer.buttonsContainer.mainContainer.addEventListener("click",(e) => {
    if (e.target.tagName !== "BUTTON") {
        return;
    }
 calculatorLogic({ text: e.target.textContent,
     type: e.target.dataset.type,
      id: e.target.id });

   
});






