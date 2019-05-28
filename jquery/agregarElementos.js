$(document).ready(()=>{
    var padre = $('.contenedor')
    var contador = 1
    $('#agregar').on('click',()=>{
        var caja = $('<div></div>').attr('class','caja').html(`<p>Numero =${contador}</p>`)
        contador++;
       padre.append(caja) //Agregar una caja al principio
       //padre.prepend(caja) // Agregar una caja al final 
       // padre.after(caja) // before y after permite agregar antes o despues de una referencia

    })
})
