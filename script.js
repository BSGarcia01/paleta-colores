console.log("hola, script esta conectado")

const botonTres = document.getElementById("boton-3")
const botonSeis = document.getElementById("boton-6")
const botonNueve = document.getElementById("boton-9")
const caracteres = "0123456789ABCDEF"

// Funciones 
function generarColor (){
    let resultado = '#'
    for (let i = 0; i<6; i++){
        resultado += caracteres[Math.floor(Math.random()*16)]
    }
    return resultado
}
//console.log(generarColor())

botonTres.addEventListener('click', function(){

    
    console.log(caracteres [Math.floor((Math.random()* 16))])
    
})

botonSeis.addEventListener("click", function(){
    console.log("6")
})

botonNueve.addEventListener("click", function(){
    console.log("9")
})

