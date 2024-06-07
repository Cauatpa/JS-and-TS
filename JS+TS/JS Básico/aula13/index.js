// Funções (Básico)

function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 3));

/////////Função dentro da viariavel///////////


const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));

/////////////Arrow Function////////////////

const div2 = (z) => z / 2;

console.log(div2(10));