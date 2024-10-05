/**
 *Función que sirve para iniciar/reiniciar el juego. Se ponen a 0 los puntos y se borra el mazo de cada jugador.
 * @param {Array<Number>} playersPoints - Array con los puntos de ambos jugadores
 * @param {Number} numJugadores - Cantidad de jugadores, por defecto el jugador contra la máquina.
 */
export const startGame = (playersPoints, numJugadores = 2) => {
    const btnPick = document.querySelector('#btnPick'),
        divPlayersCards = document.querySelectorAll('.cardDiv'),
        HTMLPoints = document.querySelectorAll('small');

    btnPick.disabled = false; 
   
    for (let i = 0; i < numJugadores; i++) {
        playersPoints.push(0);
    }
    HTMLPoints.forEach(elem => elem.innerText = 0);
    divPlayersCards.forEach(elem => elem.innerHTML = '');
}