function limitarDigito(input) {
    if(input.value.length > 1) {
        input.value = input.value.slice(0, 1);
    }
}

const todosInput = document.querySelectorAll('#input').value

let teste = [];

teste = todosInput.forEach(element => {
    console.log(teste)
});


