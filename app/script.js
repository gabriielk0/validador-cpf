const botao = document.getElementById("botao-validar");

botao.addEventListener("click", () => {
  const inputs = document.querySelectorAll("#input");
  const valores = [];

  inputs.forEach((input) => {
    valores.push(input.value);
  });

  const resultadoCalculoA = calculoA(valores);

  //apenas para consulta
  console.log(valores);
  console.log(resultadoCalculoA);

  // Define uma variavel para cada indice
  const n = [];
  for (let i = 0; i < 9; i++) {
    n[i] = valores[i];
  }

  // Finaliza os calculos e imprime na tela

  // Primeiro Validador
  const resultadoFinalA = validadorA(resultadoCalculoA);
  const numericoA = document.getElementById("validador-um");

  numericoA.setAttribute("value", resultadoFinalA);

  console.log(numericoA);

  // Segundo Validador
  const calculoB2 = calculoB(valores);

  const valorA = parseInt(numericoA.value) * 2;

  const resultadoCalculoB = calculoB2 + valorA;

  const resultadoFinalB = validadorB(resultadoCalculoB);
  const numericoB = document.getElementById("validador-dois");

  numericoB.setAttribute("value", resultadoFinalB);

  console.log(resultadoFinalB);
  console.log(numericoB);
});

//Essa função multiplica os 9 digitos do CPF pelo algoritmo do primeiro validador

function calculoA(valores) {
  let resultadoACalculo = 0;
  for (let i = 0; i < valores.length; i++) {
    resultadoACalculo += valores[i] * (10 - i);
  }

  return [resultadoACalculo];
}

// Essa função divide o resultado da multiplicação por 11 e após é feito o calculo 11 menos o resto
// Também filtra caso o resto seja menor que 2

function validadorA(resultadoCalculoA) {
  let resultadoA = 0;
  let definindoA = resultadoCalculoA % 11;

  if (definindoA < 2) {
    resultadoA = 0;
  } else {
    resultadoA = 11 - definindoA;
  }

  return resultadoA;
}

//Essa função multiplica os 9 digitos e o primeiro validador do CPF pelo algoritmo do Segundo validador

function calculoB(valores) {
  let resultadoBCalculo = 0;
  for (let i = 0; i < valores.length; i++) {
    resultadoBCalculo += valores[i] * (11 - i);
  }

  return resultadoBCalculo;
}

// Essa função divide o resultado da multiplicação por 11 e após é feito o calculo 11 menos o resto
// Também filtra caso o resto seja menor que 2

function validadorB(resultadoCalculoB) {
  let resultadoB = 0;
  let definindoB = resultadoCalculoB % 11;

  if (definindoB < 2) {
    resultadoB = 0;
  } else {
    resultadoB = 11 - definindoB;
  }

  return resultadoB;
}
