let botaoCadastro = document.querySelector(".cadastroModalOpen");
let modalCadastro = document.querySelector(".bgModal");
let closeButton = document.querySelector(".closeButton");

botaoCadastro.addEventListener('click', (event) => {
    modalCadastro.style.display = "flex";
});

closeButton.addEventListener('click', (event) => {
    modalCadastro.style.display = "none";
});