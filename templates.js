function getQuizCardHTML() {
    return /*html*/ `
    <div class="card quiz-card">
        <img src="./img/card-image.jpeg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Frage</h5>
            <div>
                <div class="card mb-2">
                    <div class="card-body">
                        Antwort
                    </div>
                </div>

                <div class="card mb-2">
                    <div class="card-body">
                        Antwort
                    </div>
                </div>

                <div class="card mb-2">
                    <div class="card-body">
                        Antwort
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        Antwort
                    </div>
                </div>
            </div>
            <div class="quiz-card-footer pt-3">
                <div><b>1</b> von <b>5</b> Fragen</div>
                <a href="#" class="btn btn-primary">Nächste Frage</a>
            </div>
        </div>
    </div>
    `;
};