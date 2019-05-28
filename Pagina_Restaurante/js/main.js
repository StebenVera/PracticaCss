$(document).ready(()=>{
    //AOS.init();

    //Efecto Menu
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top':'-200px'
        })
        $(this).animate({'top':'0px'},2000+(index*500))
    })

    //Efecto header si la pantall es mas grande 800px
    //se va ejecutar el evento
   if($(window).width() > 800){
        $('header .textos').css({
            opacity:0,
            marginTop:0

           
        })

        $('header .textos').animate({
            'opacity':'1',
             'marginTop':'-52px'
        },1000)
   } 
    
})