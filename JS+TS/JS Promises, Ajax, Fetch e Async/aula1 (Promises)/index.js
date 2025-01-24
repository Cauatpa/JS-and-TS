function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject(new Error('ERRO com a busca'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando Dados', rand(1,2));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(1111, rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO: ', e);
    });

console.log('Começando processo:')
