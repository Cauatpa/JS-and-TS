/*const pessoa1 = new Object();
pessoa1.nome = 'Cauã';
pessoa1.sobrenome = 'Thurler';
pessoa1.idade = 21;
pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome`);
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}*/


//Factory Functions / Constructor Functions / Class

/*function criaPessoa(nome, sobrenome ){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
};

const p1 = criaPessoa('Cauã', 'Thurler');
console.log(p1.nomeCompleto);*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p1 = new Pessoa('Cauã', "Thurler");
console.log(p1);

