// Filter = Filtragem no Array

const numb = [5, 10 , 80, 1, 2, 3, 50, 8, 7, 11, 15, 22, 27];

function filterCB(valor){
    return valor >= 10;
}

const plus10 = numb.filter(valor => valor >= 10);

console.log(plus10);

// Filtragem de nomes

const pessoas = [
    { nome: 'Cauã', idade: 21 },
    { nome: 'Thairiny', idade: 21 },
    { nome: 'Lucas', idade: 21 },
    { nome: 'João Paulo', idade: 21 },
    { nome: 'Luiza', idade: 21 }
];
const nomes = pessoas.filter(function(obj){
    return obj.nome.length >= 4;
});
console.log(nomes);
