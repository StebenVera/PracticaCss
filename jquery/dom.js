$(document).ready(()=>{
    //Parent
    /*
    $('#tercera').parent().css({
        background:"#1b3d82"
    })   //Obtenemos el elemtno padre
    */

    //Parents seleccion todos los elementos padres de #tercera, divpadre div container body
    /*
    $('#tercera').parents().css({
        background:"#000"
    }
    )*/

    //children
   // $('#padre').children().fadeOut(1000)
   //   $('#padre').children('#tercera').fadeOut(1000)

   //Find nos permite encontrar un elemento dentro de un contenedor busca dentro de varios niveles
  // $('#contenedor').find('div.caja').slideUp(1000)

  //siblings nos permite seleccionar los elementos hermanos
  // $('#tercera').siblings().slideUp(2000)

  //Next - Prev   prevAll nextAll
  $('#tercera').prev().css({
      background:"red"
  })

  $('#tercera').next().css({
    background:"red"
})
})