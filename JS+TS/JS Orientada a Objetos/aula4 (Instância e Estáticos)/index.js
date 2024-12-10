class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //metodo de instancia
    aumentarVolume(){
        this.volume += 1;
    }
    diminuirVolume(){
        this.volume -= 1;
    }


    //metodo estático
    static trocaPilha(){
        console.log('Pilha trocada!');
    }
}

const controle1 = new ControleRemoto('PHILIPS');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();

console.log(controle1);

ControleRemoto.trocaPilha(); 
