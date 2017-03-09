
//
function paresynones(){

document.write("Vamos a jugar a pares y nones.");

var jugadorUno = prompt("Jugador uno dinos un numero del 1 al 5");

document.write("<br> El jugador 1 ha sacado " + jugadorUno);

var jugadorDos = prompt("Jugador dos dinos un numero del 1 al 5");

document.write(".<br> El jugador 2 ha sacado " + jugadorDos);

jugadorUno = Number(jugadorUno);
jugadorDos = Number(jugadorDos);

var suma = jugadorUno + jugadorDos;

document.write(".<br> La suma de jugadas es " + suma);

if(suma % 2 ===0){
    document.write(".<br><br> El jugador 2 ha ganado");
}else{
    document.write(".<br><br> El jugador 1 ha ganado");
}

}

