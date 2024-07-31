let visor = document.getElementById("visor");

function escrever(num){
    let ope = document.getElementById("visor").value;

    if()
}

function dividirPorUm(){
    let extratoVisor = document.getElementById("visor").value
    const resultadoConta = resultado(extratoVisor);
    document.getElementById("visor").value = resultadoConta;
}

function resultado(extrato){
    const retorno = eval(document.getElementById("visor").value);
    return retorno;
}