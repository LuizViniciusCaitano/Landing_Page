document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
        const question = item.querySelector(".question");
        const answer = item.querySelector(".answer");

        question.addEventListener("click", function () {
            // Alternar a visibilidade da resposta ao clicar na pergunta
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
