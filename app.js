// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresJugadores = []; 
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
    mostrarJugadores();   
    }  
}  
 // Función para mostrar la lista de jugadores
function mostrarJugadores() {
    
    console.log("Lista de jugadores registrados:");
    let lista = "";
    listaNombresJugadores.forEach((jugador, i) => {
        console.log(`${i + 1}. ${jugador}`);
        lista += `${i + 1}. ${jugador}<br>`;
    });
    asignarTextoDOM(lista); 
}   


// funcion asignar texto dom 
function asignarTextoDOM(texto) {
    const elementoDOM = document.getElementById("listaAmigos");
    elementoDOM.innerHTML = texto;
}  



     





