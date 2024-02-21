let inicial;
let final;
let quantidade;
let lista = [];

function imprimeTexto(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;

}

function selecionarTexto(tag){

    return document.getElementById(tag).value;

}

function sortear(){

    inicial = parseInt(selecionarTexto("de"));
    final = parseInt(selecionarTexto("ate"));
    quantidade = parseInt(selecionarTexto("quantidade"));
    if(isNaN(quantidade) || isNaN(final) || isNaN(inicial)){
        imprimeTexto("resultado", "Digite números válidos");
        return;
    }
    else if(inicial > final){
        imprimeTexto("resultado", "O número inicial tem que ser menor que o final");
        return;
    }
    else if(inicial < 0 || final < 0 || quantidade < 0){
        imprimeTexto("resultado", "Somente números positivos");
        return;
    }
    for(let i = 0; i < quantidade; i++){
        let numero = parseInt(Math.random()*(final-inicial + 1) + inicial);
        // while(lista.includes(numero)){
        //     numero = parseInt(Math.random()*(final-inicial + 1) + inicial);
        // }
        lista.push(parseInt(Math.random()*(final-inicial + 1) + inicial));
    }
    if(lista.length < 1){
        imprimeTexto("resultado", "Digite os números");
        return;
    }
    imprimeTexto("resultado", "O números sorteados são " + lista );
    console.log(lista);
    alterarBotaoReset();
    alterarBotaoSortear();
}

function alterarBotaoSortear(){

    let botao = document.getElementById("btn-sortear")
    if (botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
        document.getElementById('btn-sortear').removeAttribute('disabled');
    }
    else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
        document.getElementById('btn-sortear').setAttribute('disabled', true);
    }  

}

function alterarBotaoReset(){

    let botao = document.getElementById("btn-reiniciar")
    if (botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
        document.getElementById('btn-reiniciar').removeAttribute('disabled');
    }
    else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
        document.getElementById('btn-reiniciar').setAttribute('disabled', true);
    }  

}

function reiniciar(){

    lista = [];
    document.getElementById("de").value = ''
    document.getElementById("ate").value = ''
    document.getElementById("quantidade").value = ''
    imprimeTexto("resultado", " ");
    alterarBotaoReset();
    alterarBotaoSortear();
}