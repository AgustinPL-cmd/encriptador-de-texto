
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


document.getElementById('textoEncriptar').addEventListener("input", function(event){
    let inputValue = event.target.value;
    const warningMessage = document.getElementById('warning');
    const regex = /[áéíóúÁÉÍÓÚ]/;
    const mapaDeTildes = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
      };
    
    const mensajeAdvertencia =  document.getElementById('p-advertencia');

    if(inputValue != inputValue.toLowerCase()){
        warningMessage.style.display = 'flex';
        warningMessage.style.flexDirection = 'row';
        warningMessage.style.alignItems= 'center';
        warningMessage.style.gap = '5px';
        inputValue =  inputValue.toLowerCase();
        mensajeAdvertencia.innerHTML = "<strong>Ingresa solo minúsculas<strong/>"
        
    }else if(regex.test(inputValue[inputValue.length - 1])){
        
        warningMessage.style.display = 'flex';
        warningMessage.style.flexDirection = 'row';
        warningMessage.style.alignItems= 'center';
        warningMessage.style.gap = '5px';
        inputValue = inputValue.replace(/[áéíóúÁÉÍÓÚ]/g, letra => mapaDeTildes[letra]);
        mensajeAdvertencia.innerHTML = "<strong>No ingreses tildes<strong/>"

    }
    else{
        warningMessage.style.display = 'none';  
    }   

     // Asigna el nuevo valor al campo de entrada
     event.target.value = inputValue;
})


function procesarMensaje(opcion){
    const seccionInicial = document.getElementById('mensaje-no-encontrado');
    const btnCopy = document.getElementById('div-sombra2');
    const mostrarMensaje = document.getElementById('mensaje-encriptado');
    let mensaje = document.getElementById('textoEncriptar').value;
    let letrasDesencriptadas = ['e', 'i', 'a', 'o', 'u'];
    let letrasEncriptadas = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    const warningMessage = document.getElementById('warning');
    const mensajeAdvertencia = document.getElementById('p-advertencia');

    let letra = '';
    let mensajeEncriptado = '';
    let arrayDesencriptado = [];
    let mensajeDesencriptado = '';

    document.getElementById('form-mensaje').addEventListener("submit", function(event){
        event.preventDefault();
    });

    if(mensaje.length != 0){
        console.log('Carajo');
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
    else{
        warningMessage.style.display = 'flex';
        warningMessage.style.flexDirection = 'row';
        warningMessage.style.alignItems= 'center';
        warningMessage.style.gap = '5px';
        mensajeAdvertencia.style.display = 'block';
        mensajeAdvertencia.innerHTML = "<strong>Ingresa texto<strong/>"
    }
    


    
    
    
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