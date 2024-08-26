function showMessage(tag,text){

    let input = document.querySelector(tag);
    input.innerHTML = text;
}

function clearContainer(){
    //limpa as mensagens e as imagens container ao mesmo tempo que faz o botão de copiar aparecer
    showMessage("h3","");
    showMessage("h4","");

    document.getElementById("alien-star").style.display = "none";
    
    let copyMessage = document.getElementById("copyMessage");
    copyMessage.style.visibility ="visible";
    copyMessage.style.pointerEvents = "auto";
}

function encrypt(){
    
    let inputMessage = document.querySelector("textarea").value;

    if(inputMessage == ""){

        alert("O campo de texto não pode estar vazio!")
        return;
    }
    
    if (!messageValidation(inputMessage)) {
        alert("Texto inválido! Use apenas letras minúsculas e espaços.");
        return;
    }

    let result = inputMessage 
        .replace(/e/g,'enter')
        .replace(/i/g,'imes')
        .replace(/a/g,'ai')
        .replace(/o/g,'ober')
        .replace(/u/g,'ufat');

    showMessage("#outputMessage",result);
    clearContainer();
    document.querySelector("textarea").value = ""; 

    // Altera o estilo do container
    document.querySelector(".right-container").classList.add('encrypted');
    document.querySelector(".right-container").classList.remove('decrypted');
}

function decrypt(){
    
    let inputMessage = document.querySelector("textarea").value;
    
    if(inputMessage == ""){

        alert("O campo de texto não pode estar vazio!")
        return;
    }
    
    if (!messageValidation(inputMessage)) {
        alert("Texto inválido! Use apenas letras minúsculas e espaços.");
        return;
    }

    let result = inputMessage
    .replace(/enter/g,'e')
    .replace(/imes/g,'i')
    .replace(/ai/g,'a')
    .replace(/ober/g,'o')
    .replace(/ufat/g,'u');

    showMessage("#outputMessage",result);
    clearContainer();
    document.querySelector("textarea").value = ""; 

    // Altera o estilo do container
    document.querySelector(".right-container").classList.add('encrypted');
    document.querySelector(".right-container").classList.remove('decrypted');
}

function copy(){
    let copiedText = document.querySelector("#outputMessage").innerText;
    navigator.clipboard.writeText(copiedText);
    alert("Texto copiado com sucesso!");

}

function messageValidation(input) {
    const regex = /^[a-z\s]*$/;
    return regex.test(input);
}

















































// funcao recebe numero romano e transforma em numero decimal
// EASY
