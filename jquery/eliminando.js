$(document).ready(()=>{
    //remove
    var padre  = $(".contenedor")
    var segunda = $("#segunda")
    //padre.remove() //perimite eliminar tanto el contenedor como los elementos hijos
   // padre.children().remove() // Eliminar todos los elemenots hijos

  // padre.children('#segunda').remove() //elimina el div con id segunda

   // segunda.siblings().remove() //Elimina todos los hermandos de segunda menos el 

   padre.empty() //Elimina todos los elementos hijos

})