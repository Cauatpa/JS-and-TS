function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Cauã');
console.dir(funcao);