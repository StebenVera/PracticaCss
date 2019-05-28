$(document).ready(()=>{
    $('#titulo').text('Texto modificando con jquery') 
    let nombre = $('#nombre')

    nombre.on('change',()=>{
        $('#titulo').text(nombre.val())
    })

   // $('#enlace').text('FalconMaster.com')

   // $('#enlace').attr('href','http://www.falconmasters.com')
    //modificar varios atributos al tiempo
     $('#enlace').attr({
         'class':'azul',
         'target':'_blank'
     })

})