function init() {
    renderQuestion();
    // showDifficulties();
};

let pickQuestion = (question = 0) => {
    renderQuestion(category, question)
};


function showDifficulties() {
    for (let i = 0; i < categories.length; i++) {
        category = categories[i];
        categoryTitle = Object.keys(category);
        document.getElementById('categoryTitle').innerHTML += getDifficultyTabHTML();
    }
};


function renderQuestion() {
    let question = categories[0][Object.keys(categories[0])[0]][currentQuestion];
    let amountQuestions = categories[0][Object.keys(categories[0])[0]].length;

    if (currentQuestion >= amountQuestions) {
        //etwas anderes
    } else {
        document.getElementById('questionText').innerText = question.questionText;
        document.getElementById('totalQuestions').innerHTML = categories[0][Object.keys(categories[0])[0]].length;
        document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
        document.getElementById('answer1').innerText = question.answers[0];
        document.getElementById('answer2').innerText = question.answers[1];
        document.getElementById('answer3').innerText = question.answers[2];
        document.getElementById('answer4').innerText = question.answers[3];
    }
};


function renderStartingPage() {};


function checkIfCorrect(answer) {
    let question = categories[0][Object.keys(categories[0])[0]][currentQuestion];
    let i = answer + 1;
    if (answer == question.correctAnswer) {
        document.getElementById(`answer${i}`).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(`answer${i}`).parentNode.classList.add('bg-danger');
        document.getElementById(`answer${question.correctAnswer+1}`).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextQuestionBtn').disabled = false;
};

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextQuestionBtn').disabled = true;
    document.querySelectorAll('.bg-success, .bg-danger')
        .forEach(element => element.classList.remove('bg-success', 'bg-danger'));
    renderQuestion();

};