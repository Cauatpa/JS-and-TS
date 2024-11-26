function Produto(nome, preco){
    this.nome= nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

//Camiseta

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

Camiseta.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};


//Caneca


function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

Caneca.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};



const camiseta = new Camiseta ('T-shirt', 50, 'Preta');
const caneca = new Caneca ('Caneca', 100, 'Porcelana', 105);
camiseta.desconto(20);
caneca.desconto(40);
console.log(camiseta);
console.log(caneca);