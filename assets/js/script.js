let currentQuestion = 0;
let score = 0;
let quizData;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("ban_result").getElementsByTagName("button")[0];
const scoreText = document.getElementById("score");

function cancel() {
    location.reload();
}

function quiz(argument) {
    const tela_inicial = document.getElementById("op_inicio-container");
    const quiz = document.getElementById("quiz");
    const quiz_img = document.getElementById("quiz_img");

    tela_inicial.style.display = "none";
    quiz.style.display = "block";
    quiz_img.src = "assets/img/"+imgData[argument];

    // Defina a variável quizData com base no argumento passado
    switch (argument) {
        case '1':
            quizData = quizData1;
            break;
        case '2':
            quizData = quizData2;
            break;
        case '3':
            quizData = quizData3;
            break;
        case '4':
            quizData = quizData4;
            break;
        default:
            // Trate casos inválidos aqui, se necessário
            break;
    }

    // Reinicialize a pergunta atual e a pontuação
    currentQuestion = 0;
    score = 0;

    // Carregue a primeira pergunta com base no conjunto de dados selecionado
    loadQuestion();
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];

    questionText.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.classList.add("btn_answer");
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });

    nextButton.disabled = true;
}

function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        score++;
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestion++;

    const scorek = document.getElementById("score");
    scorek.innerText = "Pontuação: " + score;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizCompleted();
    }
}

function quizCompleted() {
    questionText.innerText = "Quiz concluído!"; // colocar video do youtube
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreText.innerText = `Pontuação final: ${score} de ${quizData.length}`;
}