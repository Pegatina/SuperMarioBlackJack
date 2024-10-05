/**
 * Función que pinta la carta en el espacio de cada jugador.
 * @param {Element} divPlayerCards - Elemento HTML que recoge y refleja las cartas de cada jugador.
 * @param {String} card - La carta obtenida, que se usará para crear la imagen correspondiente.
 * @param {Number} turn - El turno del jugador al que se añadirá la carta.
 */
export const createCard = (divPlayerCards, card, turn) => {
    const cardImg = document.createElement('img');
    cardImg.src = `assets/cards/${card}.png`;
    cardImg.classList.add('cards');
    divPlayerCards[turn].append(cardImg);
};