const generarColores = document.getElementById("generar-colores")
const tamanoPaleta = document.getElementById("tamano-paleta")

const caracteres = "0123456789ABCDEF"
const cajaDeColores = document.getElementById("paleta")


//////////////////////////////////////////
function generarColor (){
    let resultado = '#'
    for (let i = 0; i<6; i++){
        resultado += caracteres[Math.floor(Math.random()*16)]
    }
    return resultado
}

function hexToHSL(hex) {
    let r = parseInt(hex.substring(1, 3), 16)
    let g = parseInt(hex.substring(3, 5), 16)
    let b = parseInt(hex.substring(5, 7), 16)

    r /= 255
    g /= 255
    b /= 255

    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2

    if (max === min) {
        h = 0
        s = 0
    } else {
        let d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

        if (max === r) {
            h = (g - b) / d + (g < b ? 6 : 0)
        } else if (max === g) {
            h = (b - r) / d + 2
        } else {
            h = (r - g) / d + 4
        }
        h /= 6
    }

    h = Math.round(h * 360)
    s = Math.round(s * 100)
    l = Math.round(l * 100)

    return `hsl(${h}, ${s}%, ${l}%)`
}


function obtenerColorTexto(hex) {
    let r = parseInt(hex.substring(1, 3), 16)
    let g = parseInt(hex.substring(3, 5), 16)
    let b = parseInt(hex.substring(5, 7), 16)

    let luminancia = (r * 299 + g * 587 + b * 114) / 1000

    return luminancia > 150 ? "#000000" : "#ffffff"
}

function mostrarMensaje(texto){
    let mensaje = document.createElement("div")
    mensaje.className = "toast"
    mensaje.textContent = texto
    document.body.appendChild(mensaje)

    setTimeout(function(){
        mensaje.remove()
    }, 2000)
}


///////////////////////////////////////////////
generarColores.addEventListener('click', function(){
    cajaDeColores.innerHTML=""
    let cantidad = Number(tamanoPaleta.value)
    for(let i=0; i<cantidad; i++){
        let color = document.createElement("div")
        color.className="caja-color"
        color.setAttribute("tabindex", "0")

        let codigoColor = generarColor()
        let codigoHSL = hexToHSL(codigoColor)

        color.style.backgroundColor = codigoColor
        color.style.color = obtenerColorTexto(codigoColor)
        color.textContent = codigoColor + '\n' + codigoHSL

        cajaDeColores.appendChild(color)

        color.addEventListener("click", function(){
            navigator.clipboard.writeText(codigoColor)
            mostrarMensaje("¡Color copiado!")
        })
    }
})