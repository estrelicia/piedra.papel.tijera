function juego(opcion) {

    jugada = Math.floor(Math.random() * 3 + 1);

    if (opcion == 1) {
        document.getElementById("eleccion").innerHTML = "Elegiste Piedra.<br>";
        switch (jugada) {
            case 1:
                document.getElementById("resultado").innerHTML = "Boti eligió Piedra.";
                document.getElementById("destacado").innerHTML = "<span class=\"resultadodestacado\">Empate</span>";
                break;
            case 2:
                document.getElementById("resultado").innerHTML = "Boti eligió Papel.";
                document.getElementById("destacado").innerHTML = "<span class=\"resultadodestacado\">Perdiste</span>";
                break;
            case 3:
                document.getElementById("resultado").innerHTML = "Boti eligió Tijera.";
                document.getElementById("destacado").innerHTML = "<span class=\"resultadodestacado\">Ganaste</span>";
                break;
        }
      
    } else if (opcion == 2) {
        document.getElementById("eleccion").innerHTML = "Elegiste Papel.<br>";
        switch (jugada) {
            case 1:
                document.getElementById("resultado").innerHTML = "Boti eligió Piedra.";
                document.getElementById("destacado").innerHTML = "<span class=\"resultadodestacado\">Ganaste</span>";
                break;
            case 2:
                document.getElementById("resultado").innerHTML = "Boti eligió Papel.";
                document.getElementById("destacado").innerHTML = "<span class=\"resultadodestacado\">Empate</span>";
                break;
            case 3:
                document.getElementById("resultado").innerHTML = "Boti eligió Tijera.";
                document.getElementById("destacado").innerHTML = "<span class=\"resultadodestacado\">Perdiste</span>";
                break;
        } } else if (opcion == 3) {
            document.getElementById("eleccion").innerHTML = "Elegiste Tijera.<br>";
            switch (jugada) {
                case 1:
                    document.getElementById("resultado").innerHTML = "Boti eligió Piedra.";
                    document.getElementById("destacado").innerHTML = "<span class=\"resultadodestacado\">Perdiste</span>";
                    break;
                case 2:
                    document.getElementById("resultado").innerHTML = "Boti eligió Papel.";
                    document.getElementById("destacado").innerHTML = "<span class=\"resultadodestacado\">Ganaste</span>";
                    break;
                case 3:
                    document.getElementById("resultado").innerHTML = "Boti eligió Tijera.";
                    document.getElementById("destacado").innerHTML = "<span class=\"resultadodestacado\">Empate</span>";
                    break;
            } 
        }
}

