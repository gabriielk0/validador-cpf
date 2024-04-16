const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
    const inputs = document.querySelectorAll('#input');
    const valores = [];

    inputs.forEach(input => {
        valores.push(input.value);
    });

    const resultadoCalculoA = calculoA(valores);

    //apenas para consulta
    console.log(valores)
    console.log(resultadoCalculoA[resultadoCalculoA.length - 1]);

    // Define uma variavel para cada indice
    const n = [];
    for (let i = 0; i < 9; i++) {
        n[i] = valores[i];
    }

    // Finaliza os calculos e imprime na tela

    // Primeiro Validador
    const resultadoFinalA = validadorA(resultadoCalculoA)
    console.log(resultadoFinalA);
    const numericoA = document.getElementById('validador-um')

    numericoA.setAttribute('value', resultadoFinalA)

    console.log(numericoA)
});



//Essa função faz multiplica os 9 digitos do CPF pelo algoritmo do primeiro validador

function calculoA(valores) {
    let resultadoPrimeiroCalculo = 0;
    for (let i = 0; i < valores.length; i++) {
        resultadoPrimeiroCalculo += valores[i] * (10 - i);
    }


    return [resultadoPrimeiroCalculo];
}


// Essa função divide o resultado da multiplicação por 11 e após é feito o calculo 11 menos o resto
// Também filtra caso o resto seja menor que 2

function validadorA(resultadoCalculoA) {
    let resultadoA = 0
    let definindoA = resultadoCalculoA%11
 
    if(definindoA < 2) {
        resultadoA = 0
    } else {
        resultadoA = 11 - definindoA
    }

    return resultadoA;
}

