const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Cauã'];

// formato splice(ídice, delete, +elem1, +elem2)

const removidos = nomes.splice(5, 0, 'Luiz');
console.log(nomes, removidos);