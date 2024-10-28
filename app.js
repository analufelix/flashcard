document.addEventListener("DOMContentLoaded", () => {
    const flashcardContainer = document.getElementById("flashcard-container");

    perguntas.forEach((item) => {
        const flashcard = document.createElement("div");
        flashcard.classList.add("flashcard");

        const flashcardInner = document.createElement("div");
        flashcardInner.classList.add("flashcard-inner");

        const flashcardFront = document.createElement("div");
        flashcardFront.classList.add("flashcard-front");
        flashcardFront.innerText = item.pergunta;

        const flashcardBack = document.createElement("div");
        flashcardBack.classList.add("flashcard-back");
        flashcardBack.innerText = item.resposta;

        flashcardInner.appendChild(flashcardFront);
        flashcardInner.appendChild(flashcardBack);
        flashcard.appendChild(flashcardInner);
        flashcardContainer.appendChild(flashcard);

        flashcard.addEventListener("click", () => {
            flashcardInner.classList.toggle("is-flipped");
        });
    });
});

function enviarFeedback() {
    alert("Envie seu feedback e sugestões para: contato@flashcardsfilmesclassicos.com");
}

function conhecaEquipe() {
    alert("Conheça nossa equipe! Somos apaixonados por cinema e adoramos criar experiências interativas para os fãs de filmes clássicos.");
}

function maisQuizes() {
    alert("Em breve, teremos mais opções de quizes para você testar seu conhecimento em cinema e muito mais!");
}
