function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    var soma = 0, resto;
    
    for (var i = 1; i <= 9; i++) soma += parseInt(cpf.charAt(i-1)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.charAt(9))) return false;

    soma = 0;

    for (var i = 1; i <= 10; i++) soma += parseInt(cpf.charAt(i-1)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.charAt(10))) return false;
    
    return true;
}


var cpf = "422.119.400-64";
if (validarCPF(cpf)) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}
