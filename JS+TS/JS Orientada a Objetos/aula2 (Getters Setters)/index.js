const _velocidade = Symbol('velocidade'); //Setar a velocidade, para q ela n possa ser mudada por outra variante.

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >=150 || valor <- 0) return;
        this[_velocidade] = valor;
    }

    get velocidade () { //Mantem o valor Original.
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 120) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro ('Gol');

// for(let i = 0; i <=200; i++){
//     c1.acelerar();
// }

c1.velocidade = 20;
console.log(c1.velocidade);