function getQuizCardHTML() {
    return /*html*/ `
        <div class="card quiz-card">
            <img src="./img/card-image.jpeg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 id="questionText" class="card-title">Frage</h5>

                <div id="answersBox">
                </div>

                <div class="quiz-card-footer pt-3">
                    <div class="d-flex align-items-center">
                        <div><b id="currentQuestion">x</b> von <b id="totalQuestions">y</b> Fragen</div>
                    </div>
                    <button onclick="nextQuestion()" id="nextQuestionBtn" class="btn btn-primary" disabled>Nächste Frage</button>
                </div>
            </div>
        </div>
        `;
};


function getAnswersHTML() {
    return /*html*/ `
        <div class="card mb-2 answer-card" onclick="checkIfCorrect(i)">
            <div id="answer${i+1}" class="card-body">
                Antwort
            </div>
        </div>
    `;
};


function progressBarHTML() {
    return /*html*/ `
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
    `;
};


function getResultBodyHTML(categoryName, total) {
    return /*html*/ `        
        <div class="card-body">
            <h3 id="resultHeadline" class="result-message">
                Kategorie<br>
                ${categoryName}<br>
                Abgeschlossen
            </h3>

            <div class="score-board">
                <div class="neon-blink">Dein Score</div>
                <div>${correctAnswers}/${total}</div>
            </div>

            <div class="quiz-card-footer pt-3">
                <div class="d-flex align-items-center"></div>
                <button onclick="toMainScreen()" id="nextQuestionBtn" class="btn btn-primary">Zurück zum Menü</button>
            </div>
        </div>
    `;
};