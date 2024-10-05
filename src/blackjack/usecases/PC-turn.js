import { getWinner, acumulatePoints, createCard, pickCard } from './index.js';

/**
 * Función que le permite al PC obtener una carta.
 * @param {Number} minPoints - puntos mínimos que el PC necesita para ganar
 * @param {Array} playersPoints - array de los puntos de los jugadores
 * @param {Element} HTMLPoints - Elemento html que recoge y refleja los puntos de cada jugador
 * @param {Element} divPlayersCards - Elemento html que recoge y refleja las cartas de cada jugador
 * @param {Array<String>} deck - baraja, por defecto vacía
 * @returns {String} devuelve la carta de la baraja
 */
export const PCTurn = (minPoints, playersPoints, HTMLPoints, divPlayersCards, deck = []) => {

    //Condiciones para que el juego no se rompa.
    if (!HTMLPoints) throw new Error('Se necesitan los puntos HTML');
    if (!deck || deck.length === 0) throw new Error('No hay cartas en la baraja');
    if (!minPoints) throw new Error('Se necesitan los puntos del jugador');

    let PCPoints = 0;

    do {
        if (minPoints === 21) {
            break;
        } else if (minPoints > 21 && PCPoints >= 21) {
            break;
        }
        const card = pickCard(deck);

        PCPoints = acumulatePoints(playersPoints, HTMLPoints, card, playersPoints.length - 1);
        createCard(divPlayersCards, card, playersPoints.length - 1);

    } while (PCPoints < minPoints && minPoints <= 21);

    getWinner(playersPoints);
}
