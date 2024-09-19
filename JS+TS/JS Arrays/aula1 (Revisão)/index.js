// POP = remove o ultimo valor da array

/*const nomes = ['Eduado', 'Maria', 'Joana'];
const novo = [...nomes];

novo.pop();
console.log(nomes);
console.log(novo);*/

//  SHIFT = remove o primeiro indice e raloca os outros.

/*const nomes = ['Eduado', 'Maria', 'Joana'];
nomes.shift();
console.log(nomes);*/

// PUSH = adiciona um elemneto no final da array

/*const nomes = ['Eduado', 'Maria', 'Joana'];
nomes.push('Cauã');
console.log(nomes);*/

// UNSHIFT = Adiciona elementos no começo do array mais realoca os elementos de indice

/*const nomes = ['Eduado', 'Maria', 'Joana'];
nomes.unshift('Cauã');
console.log(nomes);*/

// SLICE = Seleciona os apenas os indices q quer mostrar

/*const nomes = ['Eduado', 'Maria', 'Joana', 'Cauã'];
const novo = nomes.slice(0 ,2)
console.log(novo);*/

// SPLIT = separa espaços, virgulas e afins // JOIS = Une todos os valores

const nome = ['Cauã', 'Thurler', 'Pinheiro', 'de', 'Azevedo'];
const nomes = nome.join(' ');
console.log(nomes);