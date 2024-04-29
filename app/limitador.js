function limitarDigito(input) {
  const valorAtual = input.value;

  if (valorAtual.length > 1) {
    input.value = valorAtual.slice(0, 1);
  }

  if (valorAtual.length === 1) {
    const inputs = document.querySelectorAll("#input");

    const indexAtual = Array.from(inputs).indexOf(input);

    const proximoIndex = indexAtual + 1;

    if (inputs[proximoIndex]) {
      inputs[proximoIndex].focus();
    }
  }
}

function apagar(event) {
  const input = event.target;

  const valorAtual = input.value;

  if (event.key === "Backspace" && valorAtual.length === 0) {
    const inputs = document.querySelectorAll("#input");

    const indexAtual = Array.from(inputs).indexOf(input);

    const inputAnterior = inputs[indexAtual - 1];

    if (inputAnterior) {
      inputAnterior.value = "";
      inputAnterior.focus();
    }
  }
}

document.querySelectorAll("#input").forEach(function (input) {
  input.addEventListener("input", function () {
    limitarDigito(input);
  });

  input.addEventListener("keydown", apagar);
});
