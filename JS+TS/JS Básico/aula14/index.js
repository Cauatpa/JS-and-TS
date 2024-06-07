// Objetos (Básico)

function criarPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        
    };
}

const pessoa1 = criarPessoa('Cauã', 'Thurler', 21)
console.log(pessoa1);