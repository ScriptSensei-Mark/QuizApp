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
    let categoryName = Object.keys(categories[0])[0];
    if (currentQuestion >= amountQuestions) {
        let cardImg = document.getElementById('cardImg');
        cardImg.src = './img/neon-trophy.jpeg';
        cardBody = document.getElementById('cardBody');
        cardBody.innerHTML = getResultBodyHTML(categoryName, amountQuestions);
        currentQuestion = 0;
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


function toMainScreen() {
    resetProgress();
    reloadPage();
};


function reloadPage() {
    location.reload();
};


function resetProgress() {
    correctAnswers = 0;
    currentQuestion = 0;
};


function checkIfCorrect(answer) {
    let question = categories[0][Object.keys(categories[0])[0]][currentQuestion];
    let i = answer + 1;
    if (answer == question.correctAnswer) {
        document.getElementById(`answer${i}`).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        correctAnswers++;
    } else {
        document.getElementById(`answer${i}`).parentNode.classList.add('bg-danger');
        document.getElementById(`answer${question.correctAnswer+1}`).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('nextQuestionBtn').disabled = false;
    checkProgress();
    lockAnswers();
};


function nextQuestion() {
    currentQuestion++;
    isLastQuestion();
    enableNextQuestionBtn();
    removeBackgroundColor();
    unlockAnswers();
    renderQuestion();
};


function checkProgress() {
    totalQuestions = categories[0][Object.keys(categories[0])[0]].length;
    let progress = 100 * ((currentQuestion + 1) / totalQuestions); // Beachte das "+1" hier
    console.log(progress);
    updateProgressBar(progress);
    return progress;
};


function isLastQuestion() {
    let lastQuestionIndex = categories[0][Object.keys(categories[0])[0]].length - 1;
    if (currentQuestion == lastQuestionIndex) {
        document.getElementById('nextQuestionBtn').innerText = 'Siehe Ergebnis';
    }
};


function updateProgressBar(progress) {
    let progressBar = document.getElementById('progressBar');
    progressBar.innerHTML = progress + "%";
    progressBar.style.width = progress + "%";
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