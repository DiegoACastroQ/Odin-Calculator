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
function createButtons(btn) {
    let type = btn.type;

if (type === "number") {
        const button = document.createElement("button");
        button.textContent = btn.text;
        button.classList.add("numericButton");
        buttonContainer.buttonsContainer.numberButtons.appendChild(button);
        buttonContainer.buttonGrid.push(button);

}
 else if (type === "operator") {
            const button = document.createElement("button");
            button.id = btn.id;
            button.textContent = btn.text;
            button.classList.add("operatorButton");
            buttonContainer.buttonsContainer.operatorButtons.appendChild(button);
            buttonContainer.buttonGrid.push(button);
        
    }
    else if (type === "decimal") {
        const button = document.createElement("button");
        button.id = btn.id;
        button.textContent = btn.text;
        button.classList.add("decimalButton");
        buttonContainer.buttonsContainer.decimalButton.appendChild(button);
        buttonContainer.buttonGrid.push(button);
        }

}
const buttonGrid = buttonContainer.buttonConfig.map(createButtons);



