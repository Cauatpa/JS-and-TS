// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor
        writable: false, // locka o valor ou não
        configurable: false // habilita configuração na chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        },
    });
}

const p1 = new Produto('Camisa', 50, 3)
console.log(p1);