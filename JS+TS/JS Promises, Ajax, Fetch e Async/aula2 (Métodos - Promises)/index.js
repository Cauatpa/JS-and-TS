function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string'){ 
            reject('Cai no erro');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

//Promise.all | Promise.race | Promise.resolve | Promise.reject

/*const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    //'Outro valor'
];

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(error){
        console.log(error);
    });*/

function baixaPagina(){
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cahce');
    }else{
        return esperaAi('Baixei a págine', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));