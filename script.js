//console.log("Vamos a jugar a Pares o Nones");

//var tiroJugadorUno = prompt ("jugador uno, elige un numero del 1 al 5");
//var tiroJugadorDos = prompt ("Bien, ahora que eliga el jugador dos, un numero del 1 al 5");

//var tiroJugadorUno = Number(tiroJugadorUno);
//var tiroJugadorDos = Number(tiroJugadorDos);


//var sumaJugada = tiroJugadorUno + tiroJugadorDos;
//var sumaJugada = Number(sumaJugada);

//console.log(sumaJugada);

//if(sumaJugada % 2 === 0){
    //console.log("Enhorabuena, Jugador 1, HAS GANADO!!");
//}else{
    //console.log("Enhorabuena, Jugador 2, HAS GANADO!!");
//}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.write("Vamos a jugar a pares y nones");

var jugadorUno = prompt("Jugador uno dinos un numero del 1 al 5");

document.write("el jugador 1 ha sacado " + jugadorUno);

var jugadorDos = prompt("Jugador dos dinos un numero del 1 al 5");

document.write("el jugador 2 ha sacado " + jugadorDos);

jugadorUno = Number(jugadorUno);
jugadorDos = Number(jugadorDos);

var suma = jugadorUno + jugadorDos;

document.write("La suma de jugadas es " + suma);

if(suma % 2 ===0){
    document.write("el jugador 2 ha ganado");
}else{
    document.write("el jugador 1 ha ganado");
}
