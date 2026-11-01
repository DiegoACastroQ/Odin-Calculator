🧮 Interactive Calculator (Vanilla JS)

A responsive, interactive web application built from scratch using pure HTML5, CSS3, and JavaScript (Vanilla JS). This project serves as the final capstone project for the Foundations curriculum in The Odin Project.


🛠️ Key Features

Core Math Operations: Addition, subtraction, multiplication, and division.

Floating-Point Handling: Accurate rounding (up to 3 decimal places) to prevent UI overflow and standard JavaScript floating-point representation bugs.

Error Handling: Safe division-by-zero checks with clear user notifications.

Full State Management: Supports chained operations dynamically without losing track of current inputs or previous calculation results.

Responsive Layout: Built using modern CSS Flexbox to adapt seamlessly across various display sizes.

💡 Architectural Highlights

Rather than building a static layout or attaching individual event listeners to every button, the project was designed following modern software engineering principles:

Data-Driven UI:
Buttons are dynamically generated from a configuration array (buttonConfig) mapped through JavaScript. This makes the UI modular and easy to expand (e.g., adding scientific functions or changing layouts).

Event Delegation:
Leverages event bubbling by utilizing a single event listener on the parent container, optimizing memory usage and performance.

Separation of Concerns:

Global state object managing active inputs and operator history.

Pure operate() function dedicated solely to arithmetic calculations.

Central calculatorLogic() controller handling business logic and syncing state updates with the DOM.

💻 Tech Stack

HTML5: Semantic document structure.

CSS3: Flexbox layout models, custom styling, and adaptive design.

JavaScript (ES6+): Dynamic DOM manipulation, event delegation, and array methods.

🔧 Local Setup & Run

To run this project locally on your machine:

Clone the repository:

git clone https://github.com/DiegoACastroQ/YOUR_REPOSITORY_NAME.git


Navigate into the directory:

cd YOUR_REPOSITORY_NAME


Open index.html in your web browser.

👤 Author

Created by Diego Castro as part of the web development path.

GitHub: @DiegoACastroQ

Project completed as part of The Odin Project Foundations module. 🚀
