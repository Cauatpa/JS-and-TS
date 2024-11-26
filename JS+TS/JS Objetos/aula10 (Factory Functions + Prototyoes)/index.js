const falar  = {
    falar(){
        console.log(`${this.nome} está falando.`);
    },
};

const comer  = {
    falar(){
        console.log(`${this.nome} está comendo.`);
    },
};

const beber  = {
    falar(){
        console.log(`${this.nome} está bebendo.`);
    },
};

const pessoaPrototype = { ...falar};

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype), {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    };
}

const p1 = criaPessoa('Cauã', 'Thurler');
console.log(p1);
