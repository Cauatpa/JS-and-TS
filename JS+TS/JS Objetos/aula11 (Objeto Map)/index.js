const pessoas = [
    { id: 3, nome: 'Cauã'},
    { id: 2, nome: 'Thairiny'},
    { id: 1, nome: 'Olivia'}
];

//const novasPessoas = {};
//for (const pessoa of pessoas) {
//    const {id} = pessoa;
//    novasPessoas[id] = {...pessoa};
//}

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

for (const pessoas of novasPessoas){
    console.log(pessoas);
}

console.log(novasPessoas);