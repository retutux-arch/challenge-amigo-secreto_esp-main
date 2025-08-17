// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresJugadores = []; 
let jugadoresSorteados = []; 

// Capturar mensaje de bienvenida
const mensajeInicial = document.querySelector(".section-title").innerHTML;

// Función para asignar texto a elemento h2
function asignarTextoDOM(texto) {
    const elementoDOM = document.querySelector(".section-title");       
    elementoDOM.innerHTML = texto;
    return;}

// Función para agregar un jugador a la lista
function agregarJugador() {
    let nombre = document.getElementById('amigo').value;
    nombre = nombre.trim(); // Eliminar espacios en blanco al inicio y al final
    
    // Validar el no uso de números en el nombre
    if (/\d/.test(nombre)) {
        console.log("El nombre del jugador no puede contener números.");
        asignarTextoDOM("El nombre del jugador no puede contener números.");
        alert("Ingresa un nombre válido.");
        return; 
    }

    // Verificar si el nombre ya está en la lista  
    if (listaNombresJugadores.includes(nombre)) {
        console.log(`El jugador ${nombre} ya está registrado.`);
        asignarTextoDOM(`El jugador ${nombre} ya está registrado.`);
        return; 
    } else {

        // Validar la longitud del nombre
        if (nombre.length < 3) {
            console.log("El nombre del jugador debe tener al menos 3 caracteres.");
            alert("Ingresa un nombre válido.");
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
    const botonSortear = document.querySelector(".button-draw");

    // Verificar si hay jugadores registrados
    if (listaNombresJugadores.length === 0) {
        console.log("No hay jugadores registrados para sortear.");
        asignarTextoDOM("No hay jugadores registrados para sortear.");
        return;
        // Si no hay jugadores registrados, muestra un mensaje.
    } if (jugadoresSorteados.length === listaNombresJugadores.length) {
        console.log("Todos los jugadores ya han sido sorteados.");
        asignarTextoDOM("Todos los jugadores ya han sido sorteados.");

        // Cambiar botón a modo reinicio
        botonSortear.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para reiniciar"> Reiniciar`;
        botonSortear.onclick = reiniciarJuego;
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

        mostrarResultado(jugadorSeleccionado);
}
// Mostrar resultado en <ul id="resultado">
function mostrarResultado(nombre) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar contenido anterior
    const item = document.createElement("li");
    item.textContent = nombre;
    resultado.appendChild(item);
}
// Función para reiniciar el juego
function reiniciarJuego() {
    listaNombresJugadores = [];
    jugadoresSorteados = [];

    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    asignarTextoDOM(mensajeInicial);

    const botonSortear = document.querySelector(".button-draw");
    botonSortear.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo`;
    botonSortear.onclick = sortearJugador;

}  