/*
Luis Miranda tem 30 anos, pesa 84 kg
tem 1.84 de altura e seu IMC é de 25.925925925925
Luiz nasceu em 1980
*/
const nome = 'luiz';
const sobrenome = 'Miranda';
const idade = 34;
const peso = 84;
const altura = 1.84;
let IMC = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade,'anos, pesa', peso, 'KG');
console.log('Ele tem', altura, 'de altura e seu IMC é de', IMC);
console.log(nome, 'nasceu em', anoNascimento);

//tempate strings ${}, descarta virgulas e +.