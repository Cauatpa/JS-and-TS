function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoque,
        //writable: false,
        configurable: true,
        get: function(){
            return estoque;
        },
        set: function (valor) {
            if(typeof valor !== 'number'){
                return;
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa', 50, 3)
console.log(p1);