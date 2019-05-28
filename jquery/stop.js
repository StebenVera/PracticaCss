$(document).ready(()=>{
    $('#ejecutar').on('click',()=>{
        $(".caja").animate({
            marginLeft:"500px"
        },4000)
        $(".caja").animate({
            marginLeft:"0px"
        },4000)
    })

    $('#parar').on('click',()=>{
        //.stop(LimpiarAnimaciones,Saltar al final)
        $(".caja").stop(false ) //false true
    })

})