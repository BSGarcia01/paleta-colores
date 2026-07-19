
const botonTres = document.getElementById("boton-3")
const botonSeis = document.getElementById("boton-6")
const botonNueve = document.getElementById("boton-9")
const caracteres = "0123456789ABCDEF"
const cajaDeColores = document.getElementById("paleta")

// Funciones 
function generarColor (){
    let resultado = '#'
    for (let i = 0; i<6; i++){
        resultado += caracteres[Math.floor(Math.random()*16)]
    }
    return resultado
}


botonTres.addEventListener('click', function(){
    cajaDeColores.innerHTML=""
    for(let i=0; i<3; i++){
        let color = document.createElement("div")
        color.className="caja-color"
        let codigoColor = generarColor()
        color.style.backgroundColor=codigoColor
        color.textContent=codigoColor
        cajaDeColores.appendChild(color)
    }
    
})

botonSeis.addEventListener("click", function(){
    cajaDeColores.innerHTML=""
    for(let i=0; i<6; i++){
        let color = document.createElement("div")
        color.className="caja-color"
        let codigoColor = generarColor()
        color.style.backgroundColor=codigoColor
        color.textContent=codigoColor
        cajaDeColores.appendChild(color)
    }
})

botonNueve.addEventListener("click", function(){
    cajaDeColores.innerHTML=""
    for(let i=0; i<9; i++){
        let color = document.createElement("div")
        color.className="caja-color"
        let codigoColor = generarColor()
        color.style.backgroundColor=codigoColor
        color.textContent=codigoColor
        cajaDeColores.appendChild(color)
    }
})

