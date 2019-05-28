$(document).ready(function(){
    let titulo = $("#titulo")
    let info = $("#info")

    //Calcula el ancho de un elemento
    //info.text(titulo.width())
    info.append('Ancho: '+titulo.width()+'<br/>')
    info.append('Padding: '+titulo.innerWidth()+'<br/>')
    info.append('Ancho del elemento + paddin+ border '+titulo.outerWidth())
    info.append('Ancho del elemento + paddin+ border '+titulo.outerWidth(true)) //Trae la medaid del margin



    //Si queremos calcula rel alto es igual, solo usando la palabra height
})