var tablero = document.getElementById('tablero');
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