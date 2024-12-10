class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Cauã', 21);
console.log(p1)