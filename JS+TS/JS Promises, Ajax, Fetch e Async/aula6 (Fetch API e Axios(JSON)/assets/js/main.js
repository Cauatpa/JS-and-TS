// fetch('pessoas.json')
//     .then(resposta => resposta.json()
//     .then(json => carregaElementosPagina(json)));        MODELO COM FETCH API

axios('pessoas.json')
    .then(resposta => carregaElementosPagina(resposta.data));

function carregaElementosPagina(json){
    const table = document.createElement('table');
    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
