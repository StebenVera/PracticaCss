$(document).ready(()=>{
    var boton = $('#boton')
    
    /*
    boton.click(()=>{
        alert('Ejcutnado el nuevo boton')
    })*/

    function saludo() {
        alert('saludando')
    }
   // boton.click(saludo)

   boton.on('click',saludo) //esta es la forma que mas se usa actualmente
   /*
   boton.on('mouseenter',saludo) //puedo colocar una funcion, o un callback  este evento es cuando entro al boton
   boton.on('mouseleave',()=>{   // cuando sale del boton
    document.body.style.background='red'
   })*/

   //Quitar eventos
   /*
   $('#desactivar').on('click',()=>{
       boton.off('click')
   })*/

   $('#enlace').on('click',(e)=>{
       
   })
})