const INPUTTEXTO = document.getElementById("palavra");

const btINVERTER = document.getElementById("btDesafioCinco");
btINVERTER.addEventListener("click", verificarPalavra);

const RESPOSTACINCO = document.getElementById("respostaDesafioCinco");


function verificarPalavra() {
    const PALAVRA = INPUTTEXTO.value;

    if (PALAVRA == "") {
        alert("Informe uma palavra ou frase no Desafio Cinco!")
        return
    }

    inverterPalavra(PALAVRA);
    console.log(`
    Desafio cinco:
    Palavra/Frase digitada: ${PALAVRA}
    Palavra/Frase Invertida: ${inverterPalavra(PALAVRA)}
`)

    RESPOSTACINCO.innerHTML = `
        Palavra/Frase digitada: ${PALAVRA}<br><br>
        Palavra/Frase Invertida: ${inverterPalavra(PALAVRA)}
    `
    
    INPUTTEXTO.value = ''
}

function inverterPalavra(PALAVRA) {
    let arrLetras = PALAVRA.split("");

    let palavraInvertida = ""

    for (let i = (arrLetras.length - 1); i >= 0; i--) {
        palavraInvertida = `${palavraInvertida}${arrLetras[i]}`
    }
    
    return palavraInvertida
}

