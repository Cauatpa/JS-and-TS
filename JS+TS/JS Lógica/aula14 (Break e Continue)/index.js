const numeros = [1,2,3,4,5,6,7,8,9,10];

let i= 0
do {
    let numero = numeros[i];

    if(numero === 0){
        i++
        continue; //Continua até o final da var.
    }

    console.log(numero);

    if(numero == 8){
        console.log('8 encontrado')
        i++
        break; // Para até o valor ser encontrado.
    }

    i++;
} while (i < numeros.length);