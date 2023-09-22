function init() {
    renderQuestion();
    // showDifficulties();
};


function showDifficulties() {
    for (let i = 0; i < categories.length; i++) {
        category = categories[i];
        categoryTitle = Object.keys(category);
        document.getElementById('categoryTitle').innerHTML += getDifficultyTabHTML();
    }
};


function renderQuestion() {
    document.getElementById('questionText').innerHTML = categories[0][Object.keys(questions.categories[0])[0]][0].question;
    document.getElementById('totalQuestions').innerHTML = categories[0][Object.keys(questions.categories[0])[0]].length;
    document.getElementById('answer1').innerHTML = categories[0][Object.keys(questions.categories[0])[0]][0].answers[0];
    document.getElementById('answer2').innerHTML = categories[0][Object.keys(questions.categories[0])[0]][0].answers[1];
    document.getElementById('answer3').innerHTML = categories[0][Object.keys(questions.categories[0])[0]][0].answers[2];
    document.getElementById('answer4').innerHTML = categories[0][Object.keys(questions.categories[0])[0]][0].answers[3];

};