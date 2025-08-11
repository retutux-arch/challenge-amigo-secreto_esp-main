// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresJugadores = [];
// funcion para asignar el elemento del DOM
function asignarElementoDOM(elemento) { 
    const elementoDOM = document.getElementById('amigo');
    elementoDOM.innerHTML = elemento;
}   

// Función para agregar un jugador a la lista
function agregarJugador() {
    let nombre = document.getElementById('amigo').value;    
    // Verificar si el nombre ya está en la lista  
    if (listaNombresJugadores.includes(nombre)) {
        console.log(`El jugador ${nombre} ya está registrado.`);
    } else {
        // Validar la longitud del nombre
        if (nombre.length < 3) {
            console.log("El nombre del jugador debe tener al menos 3 caracteres.");
            return;
        }       
        // Validar la longitud máxima del nombre
        if (nombre.length > 20) {
            console.log("El nombre del jugador no puede tener más de 20 caracteres.");
            return;
        }
        // Si el nombre no está en la lista, agregarlo
        listaNombresJugadores.push(nombre);
        console.log(`Jugador ${nombre} agregado exitosamente.`);
    }
}  






