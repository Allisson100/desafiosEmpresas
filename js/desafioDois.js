console.log("Desafio dois: Devemos informar um número no input da página para saber a resposta!");

const RESPOSTA = document.getElementById("respostaDesafioDois");

const INPUT = document.getElementById("numero");

const BT = document.getElementById("btDesafioDois");
BT.addEventListener("click", verficaNumero)

function verficaNumero () {

    const NUMERO = INPUT.value

    if (NUMERO == "") {
        alert("Informe um número no Desafio Dois!!")
        return
    }

    fibonacci(NUMERO);

    console.log("Desafio Dois: " + fibonacci(NUMERO));

    INPUT.value = "";
    RESPOSTA.textContent = fibonacci(NUMERO);

}

function fibonacci(NUMERO) {

    let seqFibo = 0;
    
    let num01 = 0;
    let num02 = 1;
    
    
    for (let i = 0; i <= NUMERO; i++) {

        if(NUMERO == seqFibo) {

            return `O número ${NUMERO} pertence a sequência de Fibonacci`

        } else if (seqFibo > NUMERO) {
            
            return `O número ${NUMERO} não pertence a sequência de Fibonacci`
        }
    
        seqFibo = num01 + num02;
    
        num01 = num02;
        num02 = seqFibo;
    }
}

