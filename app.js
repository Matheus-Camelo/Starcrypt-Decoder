// function exibirTexto(tag,texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;

// }

// function exibirMensagem(){
//     exibirTexto('h2', resultado)

// }


function criptografar(texto){
    let resultado = texto
        .replace(/e/g,'enter')
        .replace(/i/g,'imes')
        .replace(/a/g,'ai')
        .replace(/o/g,'ober')
        .replace(/u/g,'ufat');
    console.log(resultado)
    return resultado
}

function descriptografar(texto){
    let resultado = texto
        .replace(/enter/g,'e')
        .replace(/imes/g,'i')
        .replace(/ai/g,'a')
        .replace(/ober/g,'o')
        .replace(/ufat/g,'u');
    console.log(resultado)
    return resultado
}

function criptografarTexto(){
    let textoDigitado = document.querySelector("#textoDigitado").value;
    let resultado = criptografar(textoDigitado);
    document.querySelector("#textoPronto").innerText = resultado;
}

function descriptografarTexto(){
    let textoDigitado = document.querySelector("#textoDigitado").value;
    let resultado = descriptografar(textoDigitado);
    document.querySelector("#textoPronto").innerText = resultado;
}

function copiarTexto(){
    let textoCopiado = document.querySelector("#textoPronto").innerText;
    navigator.clipboard.writeText(textoCopiado);
    console.log("texto copiado com sucesso!")
}



















// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"