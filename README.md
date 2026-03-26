🧠  Expense Tracker

A simple, interactive web-based quiz game built with HTML, CSS, and Vanilla JavaScript. Test your knowledge with multiple-choice questions, track your progress, and get a final score based on your performance!

✨ Features

Interactive UI: Smooth transitions between the start screen, the quiz itself, and the results screen.

Dynamic Content: Questions and answers are generated dynamically using JavaScript.

Instant Feedback: Buttons highlight green for correct answers and red for incorrect ones immediately after clicking.

Progress Tracking: A visual progress bar and a question counter keep you updated on how far along you are.

Custom Results: At the end of the quiz, players receive a final score and a custom message based on their percentage (e.g., "Perfect! You're a genius!", "Great Job! You know your stuff!").

Responsive Design: The layout is fully responsive and looks great on both desktop and mobile devices.

🛠️ Technologies Used

HTML5: Provides the structural foundation of the application.

CSS3: Handles the styling, layout, animations, and responsive design (using media queries).

JavaScript (ES6): Powers the game logic, DOM manipulation, event handling, and score calculation.

🚀 How to Run Locally

Since this is a front-end only application, you don't need to install any dependencies or run a server to play the game.

Clone the repository:

git clone (https://github.com/chaitanyaCE/Quiz-Game)

Navigate to the project directory:

cd your-repo-name


Open the game:
Simply double-click on the index.html file to open it in your default web browser.

🗂️ Project Structure

├── index.html   # The main HTML document containing the screens
├── style.css    # The stylesheet containing colors, layout, and responsiveness
└── script.js    # The game logic, questions array, and event listeners


✏️ How to Customize

You can easily add your own questions to the game! Open script.js and locate the quizQuestions array. Add, remove, or modify the objects in the array following this format:

{
  question: "Your custom question goes here?",
  answers: [
    { text: "Wrong Answer 1", isCorrect: false },
    { text: "Correct Answer", isCorrect: true },
    { text: "Wrong Answer 2", isCorrect: false },
    { text: "Wrong Answer 3", isCorrect: false },
  ],
}


🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License

Distributed under the MIT License. See LICENSE for more information.
