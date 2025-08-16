// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresJugadores = []; 
let jugadoresSorteados = []; 

// Función para asignar texto a elemento h2
function asignarTextoDOM(texto) {
    const elementoDOM = document.querySelector(".section-title");       
    elementoDOM.innerHTML = texto;
    return;
}
//función cambiar texto botón sortear amigo
function cambiarTextoBotonSortear(texto) {
    const elementoDOM = document.querySelector(".button-draw");
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
    document.getElementById('amigo').value = ""; // Limpiar el campo de entrada
    return;
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

//Función asignar texto a la lista de amigos 
function asignarTextoListaAmigos(texto) {
    const elementoDOM = document.getElementById("listaAmigos");
    elementoDOM.innerHTML = texto;
}  

//Función sortear jugador
function sortearJugador() {
    if (listaNombresJugadores.length === 0) {
        console.log("No hay jugadores registrados para sortear.");
        asignarTextoDOM("No hay jugadores registrados para sortear.");
        return;
        // Si no hay jugadores registrados, muestra un mensaje.
    } if (jugadoresSorteados.length === listaNombresJugadores.length) {
        console.log("Todos los jugadores ya han sido sorteados.");
        asignarTextoDOM("Todos los jugadores ya han sido sorteados.");

        // Reiniciar procesos
        jugadoresSorteados = [];
        listaNombresJugadores = [];
        mostrarJugadores();
        cambiarTextoBotonSortear("Reiniciar");
        return; 
    }   

        // Filtra los jugadores que aún no han sido sorteados   
        const jugadoresRestantes = listaNombresJugadores.filter(jugador => !jugadoresSorteados.includes(jugador));

        //Seleccionar aleatoriamente jugadores restantes  
        const indiceAleatorio = Math.floor(Math.random() * jugadoresRestantes.length);
        const jugadorSeleccionado = jugadoresRestantes[indiceAleatorio];
        
        // Agregar el jugador seleccionado a la lista de sorteados
        jugadoresSorteados.push(jugadorSeleccionado);
        console.log(`El jugador seleccionado es: ${jugadorSeleccionado}`);
        asignarTextoDOM(`El jugador seleccionado es: ${jugadorSeleccionado}`);

        return ;
}


     





