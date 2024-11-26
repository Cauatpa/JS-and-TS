/*
Object.keys
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')

Object.keys ( Retona as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Camisa', preco: 1.80};

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}

console.log(Object.entries(produto));""