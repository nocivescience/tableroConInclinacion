var tablero = document.getElementById('tablero');
const joystick = document.getElementById('joystick');
const headElement = document.getElementById('head');
const joystickRect = joystick.getBoundingClientRect();
const headRect = headElement.getBoundingClientRect();

const joystickCenter= {
    x: joystickRect.left + joystickRect.width / 2,
    y: joystickRect.top + joystickRect.height / 2
};

var maxDistance = joystickRect.width / 2- headRect.width / 2; // radio del joystick

var filas = 5;
var columnas = 5;

// Crear el tablero
for (var i = 0; i < filas; i++) {
    var fila = tablero.insertRow(i);
    for (var j = 0; j < columnas; j++) {
        var celda = fila.insertCell(j);
        celda.innerHTML = i + ',' + j;
    }
}

headElement.onmousedown = (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto
    document.onmousemove = function(e) {
        let dx = e.clientX - joystickCenter.x;
        let dy = e.clientY - joystickCenter.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance>maxDistance){
            dx = dx * maxDistance / distance; // normalizar el vector
            dy = dy * maxDistance / distance; // normalizar el vector
        }
        headElement.style.left = dx+50 + 'px'; //tuve que modificar esto
        headElement.style.top = dy+50 + 'px'; //tuve que modificar esto
    };
    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
        headElement.style.left = '50px';
        headElement.style.top = '50px';
    };
};
// headElement.ondragstart = function() {
//     return false;
// }