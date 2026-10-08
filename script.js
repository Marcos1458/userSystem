const form = document.querySelector("formCadastro");

//Escuta o evento do formulário
form.addEventListener("submit", function() {
event.preventDefault();
console.log(Object.fromEntries([...form.elements]
    .filter(elements => elements.id)
    .map(element => [element.id, element.value])));
form.requestFullscreen();
});