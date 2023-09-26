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


function generateFinalScoreHTML() {
    return /*html*/ `
        <div class="card quiz-card">
            <img src="./img" class="card-img-top" alt="">
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