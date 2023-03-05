const form = document.querySelector('#search-form');
const input = document.querySelector('input[name="search"]');
const cards = document.querySelectorAll('.card');
const titles = document.querySelectorAll('.card-title');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // impedir que o formulário seja enviado

  const searchTerm = input.value.toLowerCase(); // obter o termo de pesquisa em minúsculas
  const regex = new RegExp(searchTerm); // criar uma expressão regular a partir do termo de pesquisa

  // percorrer os títulos dos cartões e verificar se correspondem à expressão regular
  titles.forEach(function(title, index) {
    const card = cards[index]; // obter o cartão correspondente
    const titleText = title.textContent.toLowerCase(); // obter o texto do título em minúsculas

    // mostrar ou ocultar o cartão com base no resultado da correspondência da expressão regular
    if (regex.test(titleText)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
