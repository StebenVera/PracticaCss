let cajas = document.getElementsByTagName('div')
let contenedor = document.getElementById('contenedor')
let btn = document.getElementById('btn')
let primeraCaja = document.getElementById('primeraCaja')
//Creando Nodos

let contador=0;


let caja= document.createElement('div')
let texto = document.createTextNode('Hola mundo desde java script')
caja.setAttribute('class','caja naranja')
contenedor.appendChild(caja)
caja.appendChild(texto)
 function changetext() {
    let caja= document.createElement('div')
    let texto = document.createTextNode('Hola mundo desde java script')
    caja.setAttribute('class','caja naranja')
    contenedor.appendChild(caja)
    caja.appendChild(texto)
}
function changetext2() {
    cajas[0].innerHTML="<h1>H1 insertado</h1>" //Nos permite insertar HTML 
}

//modificando  clase o id de un elemento
caja.id='primera';
caja.className='caja'

// Como conocer un elemento padre
let padre = cajas[0].parentNode

padre.insertBefore(caja,cajas[1])  // c

//Reemplazar Nodo
padre.replaceChild(caja,cajas[0])

//Eliminar nodos
padre.removeChild(cajas[3])




//btn.addEventListener("click",changetext);

 