let cajas = document.getElementsByClassName('caja')

function color() {
    this.classList.toggle('negro') 
}

for (let  i= 0; i < cajas.length; i++) {
    cajas[i].addEventListener('click',color)    
}