
/* //EVENTOS ESTANDAR
var btnEstandar = document.getElementById('btnEstandar')
function saludo() {
    alert('hola')
}

function saludoEstandar() {
    alert('Es un saludo estandar')
}

btnEstandar.addEventListener('mouseenter ',saludoEstandar)
*/


//Crear cajas


function crearCaja() {
    var contenedor = document.getElementById('contenedor')
    var caja=document.createElement('div')
    caja.className='caja'
    contenedor.appendChild(caja)
}

var btnCaja = document.getElementById('btn-caja')

btnCaja.addEventListener('mouseout',crearCaja)