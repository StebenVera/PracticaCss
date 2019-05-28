$(document).ready(()=>{

    //$(selector).animate({parametros},velocidad,callback)
    $("#boton").on('click',()=>{
        /*
        $('.caja').animate({
            //width:'300px',
           // height:'300px',
           // opacity:'0.5'
          // width:'+=300px'
        //  marginLeft:'+=50px'
        },300,()=>{
            alert('Fin de la animacion')
        })*/

        //Animaciones de colores
        $('.caja').toggleClass('animacion')
    })
})