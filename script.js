console.log("hola, script esta conectado")

const botonTres = document.getElementById("boton-3")
const botonSeis = document.getElementById("boton-6")
const botonNueve = document.getElementById("boton-9")

//console.log(botonTres)

botonTres.addEventListener('click', function(){
    console.log('3')
})

botonSeis.addEventListener("click", function(){
    console.log("6")
})

botonNueve.addEventListener("click", function(){
    console.log("9")
})