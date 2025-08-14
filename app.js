// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresJugadores = []; 

// Funcion para asignar texto a elemento h2
function asignarTextoDOM(texto) {
    const elementoDOM = document.querySelector(".section-title");       
    elementoDOM.innerHTML = texto;
    return;
}


// Función para agregar un jugador a la lista
function agregarJugador() {
    let nombre = document.getElementById('amigo').value;    
    // Verificar si el nombre ya está en la lista  
    if (listaNombresJugadores.includes(nombre)) {
        console.log(`El jugador ${nombre} ya está registrado.`);
        asignarTextoDOM(`El jugador ${nombre} ya está registrado.`);
        return; 
    } else {
        // Validar la longitud del nombre
        if (nombre.length < 3) {
            console.log("El nombre del jugador debe tener al menos 3 caracteres.");
            asignarTextoDOM("El nombre del jugador debe tener al menos 3 caracteres.");
            return;
        }       
        // Validar la longitud máxima del nombre
        if (nombre.length > 20) {
            console.log("El nombre del jugador no puede tener más de 20 caracteres.");
            asignarTextoDOM("El nombre del jugador no puede tener más de 20 caracteres.");
            return;
        }
        // Si el nombre no está en la lista, agregarlo
        listaNombresJugadores.push(nombre);
        console.log(`Jugador ${nombre} agregado exitosamente.`); 
        asignarTextoDOM(`Jugador ${nombre} agregado exitosamente.`); 
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
    asignarTextoListaAmigos(lista); 
}   


//funcion asignar texto a la lista de amigos 
function asignarTextoListaAmigos(texto) {
    const elementoDOM = document.getElementById("listaAmigos");
    elementoDOM.innerHTML = texto;
}  

//funcion sortear jugador incompleta
function sortearJugador() {
    if (listaNombresJugadores.length === 0) {
        console.log("No hay jugadores registrados para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaNombresJugadores.length);
    const jugadorSeleccionado = listaNombresJugadores[indiceAleatorio];
    console.log(`El jugador seleccionado es: ${jugadorSeleccionado}`);
    asignarTextoDOM(`El jugador seleccionado es: ${jugadorSeleccionado}`);
}

     





