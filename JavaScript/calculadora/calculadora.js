let numero1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')
let resultado = document.getElementById('resultado')

function sumar() {
    resultado.value =  Number(numero1.value) + Number(numero2.value);
}