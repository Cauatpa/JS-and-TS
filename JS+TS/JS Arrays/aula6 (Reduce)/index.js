const nms = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = nms.reduce(function(acumulador, valor, incide, array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total);