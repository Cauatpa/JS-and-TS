function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefalt();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.nodeValue,
            sobrenome: sobrenome.nodeValue,
            peso: peso.nodeValue,
            altura: altura.nodeValue
        })

        resultado.innerHTML += `<p>${nome.nodeValue} <p>${sobrenome.nodeValue} <p>${peso.nodeValue} <p>${altura.nodeValue}</p>`
    }

    form.addEventListener('submit', recebeEventoForm)

}
meuEscopo();