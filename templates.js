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


function getResultBodyHTML(categoryName, total) {
    return /*html*/ `        
        <div class="card-body">
            <h3 id="resultHeadline" class="result-message">
                Du hast<br>
                ${categoryName}<br>
                abgeschlossen
            </h3>

            <div class="score-board">
                <div>Dein Score</div>
                <div>${correctAnswers}/${total}</div>
            </div>

            <div class="quiz-card-footer pt-3">
                <div class="d-flex align-items-center"></div>
                <button onclick="toMainScreen()" id="nextQuestionBtn" class="btn btn-primary">Zurück zum Menü</button>
            </div>
        </div>
    `;
};