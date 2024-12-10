class ValidardorCpf {
    constructor(cpf){
        this.cpf = cpf.replace(/\D/g, '');
    }

    validar(){
        if(!this.cpfValido()){
            return false;
        }
        return this.verificarDigitos();
    }

    cpfValido() {
        if (this.cpf.length !== 11 || /^(\d)\1+$/.test(this.cpf)) {
          return false;
        }
        return true;
    }

    verificarDigitos(){
        const cpfParcial = this.cpf.slice(0, 9);
        const digito1 = this.calculaDigito(cpfParcial);
        const digito2 = this.calculaDigito(cpfParcial + digito1);

        return this.cpf === cpfParcial + digito1 + digito2;
    }

    calculaDigito(cpfParcial){
        const peso = cpfParcial.length + 1;
        const soma = Array.from(cpfParcial).reduce((acumulador, numero, index) => {
            return acumulador + parseInt(numero) * (peso - index);
        }, 0);

        const resto = soma % 11;
        return resto < 2 ? '0' : String(11 - resto);
    }
}

const cpf = '123.456.789-09';
const validador = new ValidardorCpf(cpf);

if(validador.validar()){
    console.log('CPF válido');
}else {
    console.log('CPF inválido');
}