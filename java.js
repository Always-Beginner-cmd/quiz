
const javaQuestions = [
    {
        question: "Which of the following is a valid Java identifier?",
        options: ["1stVariable", "variable-name", "variable_name", "variable name"],
        answer: "variable_name"
    },
    {
        question: "Which keyword is used to define a class in Java?",
        options: ["class", "define", "function", "method"],
        answer: "class"
    },
    {
        question: "Which of the following is not a primitive data type in Java?",
        options: ["int", "float", "boolean", "string"],
        answer: "string"
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "null", "undefined"],
        answer: "false"
    },
    {
        question: "Which method is used to start a thread execution in Java?",
        options: ["run()", "start()", "execute()", "init()"],
        answer: "start()"
    },
    {
        question: "Which of these is used to handle exceptions in Java?",
        options: ["try-catch", "throw-catch", "exception-handle", "catch-except"],
        answer: "try-catch"
    },
    {
        question: "Which collection class allows you to store key-value pairs?",
        options: ["ArrayList", "HashMap", "LinkedList", "HashSet"],
        answer: "HashMap"
    },
    {
        question: "What is the main method signature in a Java application?",
        options: ["public void main(String[] args)", "public static void main(String args[])", "void main(String[] args)", "static public void main(String args[])"],
        answer: "public static void main(String[] args)"
    },
    {
        question: "Which of the following is a feature of Java?",
        options: ["Platform-dependent", "Object-oriented", "Low-level programming", "None of the above"],
        answer: "Object-oriented"
    },
    {
        question: "What is the size of an int variable in Java?",
        options: ["8 bits", "16 bits", "32 bits", "64 bits"],
        answer: "32 bits"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Get references to the HTML elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submitBtn');

// Load the first question when the page loads
loadQuestion();

function loadQuestion() {
    const currentQuestion = cQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionHTML = `
            <label>
                <input type="radio" name="option" value="${option}"> ${option}
            </label><br>
        `;
        optionsElement.insertAdjacentHTML('beforeend', optionHTML);
    });
}

// Event listener for the Submit button
submitButton.addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    if (selectedOption.value === cQuestions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < cQuestions.length) {
        loadQuestion();
    } else {
        // Store the score in localStorage and navigate to the score page
        localStorage.setItem('finalScore', score);
        window.location.href = 'score.html'; // Redirect to score page
    }
});