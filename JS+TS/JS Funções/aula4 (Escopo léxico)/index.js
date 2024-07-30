const nome = 'Cauã';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Thurler';
    falaNome();
}
usaFalaNome();