 //(function () {
    var formulario = document.getElementById('formulario')
    var nombre = formulario.nombre
    var correo = formulario.correo
    var termino = formulario.terminos
    var sexo = formulario.sexo
    var error = document.getElementById('error')
    

   function validarNombre(e) {
       if(nombre.value == "" || nombre.value == null){
           console.log('Por favor completa un nombre')
           error.style.display= 'block'
           error.innerHTML = error.innerHTML + '<li>Por favor completa el campo nombre</li>'
           e.preventDefault()
       }else{
           error.style.display = 'none'
       }
   }

    function validarCorreo(e) {
        if(correo.value == "" || correo.value == null){
            console.log('Por favor completa el correo')
            error.style.display= 'block'
            error.innerHTML = error.innerHTML + '<li>Por favor completa el campo correo</li>'
            e.preventDefault()
        }else{
            error.style.display = 'none'
        }
    }

    function validarSexo(e) {
        if(sexo.value =='' || sexo.value == null){
            console.log('Por favor completa el sexo')
            error.style.display= 'block'
            error.innerHTML = error.innerHTML + '<li>Por favor completa el campo sexo</li>'
            e.preventDefault()
        }else
        {
            error.style.display = 'none'

        }
    }

    function validarTerminos(e) {
        if (terminos.checked == false) {
            console.log('Por favor acepta terminos ')
            error.style.display= 'block'
            error.innerHTML = error.innerHTML + '<li>Por favor acepta terminos</li>'
            e.preventDefault()
        }
        else{
            error.style.display = 'none'
        }
    }

    function validarFormulario(e) {
        error.innerHTML=''
        validarNombre(e)
        validarCorreo(e)
        validarSexo(e)
    }

    formulario.addEventListener('submit',validarFormulario)
//}())