const form = document.getElementById("search-form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // previne o envio do formulário
    const query = form.elements.search.value; // obtém o valor do campo de pesquisa
    const cards = document.querySelectorAll(".card"); // obtém todos os cards
    for (let card of cards) {
        if (card.querySelector(".card-description").textContent.includes(query)) {
            card.style.display = "block"; // exibe o card se a descrição inclui a consulta
        } else {
            card.style.display = "none"; // oculta o card caso contrário
        }
    }
});
