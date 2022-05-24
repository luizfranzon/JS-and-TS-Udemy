let input = document.querySelector('input')
let button = document.querySelector('button')

button.addEventListener('click', showAlert);

function showAlert() {
    // let inputV = document.querySelector('input').value
    // alert(inputV);

    // if (window.confirm("Confirmar?")) {
    //     alert("Confirmado!")
    // } else {
    //     alert("Cancelado!")
    // }

    let value = window.prompt("Digite um valor:");
    console.log(Number(value))
}