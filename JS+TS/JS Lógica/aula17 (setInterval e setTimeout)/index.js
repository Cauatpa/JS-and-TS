function mostrarHora (){
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
  console.log(mostrarHora());  
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 2000);