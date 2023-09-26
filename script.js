function init() {
    renderQuestion();
    // showDifficulties();
};


let pickQuestion = () => {
    renderQuestion(category, currentQuestion);
};


function showDifficulties() {
    for (let i = 0; i < categories.length; i++) {
        category = categories[i];
        categoryTitle = Object.keys(category);
        document.getElementById('categoryTitle').innerHTML += getStartingPageHTML();
    }
};


function renderQuestion() {
    let question = categories[0][Object.keys(categories[0])[0]][currentQuestion];
    let amountQuestions = categories[0][Object.keys(categories[0])[0]].length;
    if (currentQuestion >= amountQuestions) {
        currentQuestion = 0;
        document.getElementById('questionBody').innerHTML = '';
    } else {
        document.getElementById('questionText').innerText = question.questionText;
        document.getElementById('totalQuestions').innerHTML = categories[0][Object.keys(categories[0])[0]].length;
        document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
        for (let i = 0; i < question.answers.length; i++) {
            const answer = question.answers[i];
            document.getElementById(`answer${i+1}`).innerText = answer;
        }
    }
};


function checkIfCorrect(answer) {
    let question = categories[0][Object.keys(categories[0])[0]][currentQuestion];
    let i = answer + 1;
    if (answer == question.correctAnswer) {
        document.getElementById(`answer${i}`).parentNode.classList.add('bg-success');
        correctAnswers++;
    } else {
        document.getElementById(`answer${i}`).parentNode.classList.add('bg-danger');
        document.getElementById(`answer${question.correctAnswer+1}`).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextQuestionBtn').disabled = false;
    lockAnswers();
};


function nextQuestion() {
    currentQuestion++;
    enableNextQuestionBtn();
    removeBackgroundColor();
    unlockAnswers();
    renderQuestion();
};


function enableNextQuestionBtn() {
    document.getElementById('nextQuestionBtn').disabled = true;
};


function removeBackgroundColor() {
    document.querySelectorAll('.bg-success, .bg-danger').forEach(element => element.classList.remove('bg-success', 'bg-danger'));
};


function lockAnswers() {
    let question = categories[0][Object.keys(categories[0])[0]][currentQuestion];
    for (let i = 0; i < question.answers.length; i++) {
        document.getElementById(`answer${i+1}`).parentNode.onclick = null;
    }
};


function unlockAnswers() {
    let totalQuestions = categories[0][Object.keys(categories[0])[0]].length
    let question = categories[0][Object.keys(categories[0])[0]][currentQuestion];
    if (currentQuestion != totalQuestions) {
        for (let i = 0; i < question.answers.length; i++) {
            const answerCard = document.getElementById(`answer${i+1}`).parentNode;
            answerCard.onclick = () => checkIfCorrect(i);
        }
    }
};