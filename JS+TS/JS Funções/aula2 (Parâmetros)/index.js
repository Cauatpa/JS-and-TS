function conta (operador, acumulador, ...numeros){     // ... = Rest Operator
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50)





/*function funcao(a, b = 0){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    b = b || 0;
    console.log(a + b);
}
funcao(2, 4);*/