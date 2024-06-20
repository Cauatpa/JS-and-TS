const pessoa = {
    naome : 'Cauã',
    sobrenome: 'Thurler',
    idade: 21
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}