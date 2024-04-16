

function limitarDigito(input) {
    if(input.value.length > 1) {
        input.value = input.value.slice(0, 1);
    }
}

const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
    const inputs = document.querySelectorAll('#input');
    const valores = [];

    inputs.forEach(input => {
        valores.push(input.value);
    });

    if (valores.length === 9) {
        console.log(valores);
    }

    const primeiroResultado = primeiroCalculo(valores);

    console.log(primeiroResultado[primeiroResultado.length - 1]);

    const n = [];
    for (let i = 0; i < 9; i++) {
        n[i] = valores[i];
    }
    const resultadoFinalPrimeira = definindoOPrimeiro(primeiroResultado)
    console.log(resultadoFinalPrimeira);
    const primeiroNumerico = document.getElementById('validador-um')

    primeiroNumerico.setAttribute('value', resultadoFinalPrimeira)

    console.log(primeiroNumerico)
});

function primeiroCalculo(valores) {
    let resultadoPrimeiroCalculo = 0;
    for (let i = 0; i < valores.length; i++) {
        resultadoPrimeiroCalculo += valores[i] * (10 - i);
    }


    return [resultadoPrimeiroCalculo];
}

function definindoOPrimeiro(primeiroResultado) {
    let resultadoPrimeiro = 0
    let definindoPrimeiro = primeiroResultado%11
 
    if(definindoPrimeiro < 2) {
        resultadoPrimeiro = 0
    } else {
        resultadoPrimeiro = 11 - definindoPrimeiro
    }

    return resultadoPrimeiro;
}

