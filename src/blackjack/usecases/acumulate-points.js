import { cardValue } from './index.js';
/**
 * Función que va contabilizando las puntuaciones de ambos jugadores.
 * @param {Array} playerPoints -Array con los puntos de los jugadores
 * @param {Element} HTMLPoints - Elemento html que recoge y refleja los puntos de cada jugador
 * @param {String} card - La carta obtenida
 * @param {Number} turn - El turno
 * @returns {Number} Devuelve los puntos del jugador en cada turno
 */
export const acumulatePoints = (playerPoints, HTMLPoints, card, turn) => {
    playerPoints[turn] += cardValue(card);
    HTMLPoints[turn].innerText = playerPoints[turn];
    return playerPoints[turn];
}