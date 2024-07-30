// Declaração de função (Function Hoisting)
falaOi();
function falaOi(){
    console.log('Sou uma função classica.'); // Função classica
}


// First-class objects (Objeto de primeira classe)
// Function expression

const souUmDado = function(){
    console.log('Sou um dado.');
}
souUmDado();


// Arrow Function (Uma função mas curta)

const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
}
funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou dentro do objeto.')
    }
}
obj.falar();