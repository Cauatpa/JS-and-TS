const numero = Number(prompt("Digite um número:"));

const numTitle = document.getElementById("title-number");
const text = document.getElementById("text");

numTitle.innerHTML = numero;
text.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;
