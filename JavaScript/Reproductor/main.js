var video = document.getElementById('video')
var btn_play = document.getElementById('btn-play')
var btn_pause = document.getElementById('btn-pause')
var volumen = document.getElementById('volumen')

btn_play.addEventListener('click',()=>{
    video.play()
    document.body.style.background="#000"
})
btn_pause.addEventListener('click',()=>{
    video.pause()
})

volumen.addEventListener('change',()=>{
    video.volume = volumen.value
})