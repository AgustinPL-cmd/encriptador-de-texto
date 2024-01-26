
function mostrarSombras(){
    const inputEncript = document.getElementById('textoEncriptar');
    const divSombras = document.getElementById('divSombra');

    inputEncript.style.width = '99%';
    inputEncript.style.height = '97%';
    inputEncript.style.top = '3%';
    inputEncript.style.right = '0';
    inputEncript.style.borderRadius = '10px 5px 10px 10px';
    inputEncript.style.backgroundColor = "#FFFBF5";

    divSombras.style.backgroundColor = "#163020";

}

function quitarSombras(){
    const inputEncript = document.getElementById('textoEncriptar');

    inputEncript.style.width = '100%';
    inputEncript.style.height = '100%';
    inputEncript.style.top = '0';
    inputEncript.style.right = '0';
    inputEncript.style.borderRadius = '10px 10px 10px 10px';

}

document.addEventListener("DOMContentLoaded", function () {
    // Espera a que el DOM esté completamente cargado

    const textarea = document.getElementById('textoEncriptar');

    // Agrega un evento de clic al textarea
    textarea.addEventListener('click', function () {
        // Selecciona todo el texto dentro del textarea
        this.select();
    });
});


function procesarMensaje(opcion){
    const seccionInicial = document.getElementById('mensaje-no-encontrado');
    const btnCopy = document.getElementById('div-sombra2');
    const mostrarMensaje = document.getElementById('mensaje-encriptado');
    let mensaje = document.getElementById('textoEncriptar').value;
    let letrasDesencriptadas = ['e', 'i', 'a', 'o', 'u'];
    let letrasEncriptadas = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    let letra = '';
    let mensajeEncriptado = '';
    let arrayDesencriptado = [];
    let mensajeDesencriptado = '';

    document.getElementById('form-mensaje').addEventListener("submit", function(event){
        event.preventDefault();
    })

    if(opcion == 1){
        for(let i = 0; i < mensaje.length; i++){
            letra = mensaje[i];
            switch (letra){
                case 'e':
                    mensajeEncriptado += 'enter';
                    break;
                case 'i':
                    mensajeEncriptado += 'imes';
                    break;
                case 'a':
                    mensajeEncriptado += 'ai';
                    break;
                case 'o':
                    mensajeEncriptado += 'ober';
                    break;
                case 'u':
                    mensajeEncriptado += 'ufat';
                    break;
                default:
                    mensajeEncriptado += letra;

            }
        }
        
        mostrarMensaje.textContent = mensajeEncriptado;
    }
    else{

        mensajeDesencriptado = mensaje;

        for(let i = 0; i < letrasEncriptadas.length; i++){
            arrayDesencriptado = mensajeDesencriptado.split(letrasEncriptadas[i]);
            mensajeDesencriptado = arrayDesencriptado.join(letrasDesencriptadas[i]);
        }

        
        mostrarMensaje.textContent = mensajeDesencriptado;

    }

    
    seccionInicial.style.display = 'none';
    btnCopy.style.display = 'block';
    mostrarMensaje.style.width = '80%';
    mostrarMensaje.style.height = '70%';
    
}


function copiarAlPortapapeles() {
    // Selecciona el párrafo
    const elementoParaCopiar = document.getElementById("mensaje-encriptado");

    // Crea un rango de selección
    const seleccion = document.createRange();
    seleccion.selectNodeContents(elementoParaCopiar);

    // Elimina cualquier selección previa del portapapeles
    window.getSelection().removeAllRanges();

    // Agrega el nuevo rango de selección al portapapeles
    window.getSelection().addRange(seleccion);

    // Ejecuta el comando de copia
    document.execCommand("copy");

    // Limpia la selección del rango
    window.getSelection().removeAllRanges();

}