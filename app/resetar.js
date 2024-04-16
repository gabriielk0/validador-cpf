const resetar = document.getElementById('botao-resetar')

resetar.addEventListener('click', () => {
    const inputs = document.querySelectorAll('#input')
    const valores = [];

    inputs.forEach(function(input) {
        input.value = '';
    })

    // const validadores = document.querySelectorAll('.validadores');

    // validadores.forEach(function(input) {
    //     input.value = '';

    const validadorA = document.getElementById('validador-um');
    const validadorB = document.getElementById('validador-dois');

    validadorA.setAttribute('value', '');
    validadorB.setAttribute('value', '');
    
});