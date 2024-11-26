function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'OR: ', this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Cauã', 'T.');
const pessoa2 = new Pessoa('Thairiny', 'C.');

console.log(pessoa1)
console.log(pessoa2)
