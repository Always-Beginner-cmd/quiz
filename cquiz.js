// Array of C programming questions
const cQuestions = [
    {
        question: "Which of the following is a valid C variable name?",
        options: ["int", "float", "if", "variable_name"],
        answer: "variable_name"
    },
    {
        question: "Which is used to generate random numbers in C?",
        options: ["rand()", "random()", "rnd()", "generate()"],
        answer: "rand()"
    },
    {
        question: "Which operator is used to allocate memory dynamically in C?",
        options: ["new", "malloc", "alloc", "memalloc"],
        answer: "malloc"
    },
    {
        question: "Which function is used to find the length of a string in C?",
        options: ["strlen()", "length()", "strlength()", "size()"],
        answer: "strlen()"
    },
    {
        question: "Which of these is not a loop structure in C?",
        options: ["for", "while", "foreach", "do-while"],
        answer: "foreach"
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