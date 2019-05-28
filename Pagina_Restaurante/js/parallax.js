$(document).ready(()=>{
    $(window).scroll(()=>{
        var ventana = $(window).width()
        if(ventana > 800){
            var scroll = $(window).scrollTop() // nos permite saber el valor del scrolltop

            $('header .textos').css({
                'transform':`translate(0px,${scroll/2}%)`
            })

            $('.acerca-de article').css({
                'transform':`translate(0px,-${scroll/4}%)`
            })
        }
    })

    $(window).resize(function()  //Cuando el usuairo cambie el ancho de la pagina vulve y calcula
    {
        var ventana = $(window).width()
        if(ventana > 800){
            var scroll = $(window).scrollTop() // nos permite saber el valor del scrolltop

            $('header .textos').css({
                'transform':`translate(0px,${scroll/2}%)`
            })

            $('.acerca-de article').css({
                'transform':`translate(0px,0px)`
            })
        }
    })
})