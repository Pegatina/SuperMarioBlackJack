/**
 * Función que permite obtener una carta.
 * @param {Array<String>} deck - array de string de cartas
 * @returns {String} devuelve y quita la carta de la baraja
 */
export const pickCard = (deck) => {
    if (!deck || deck.length === 0) {
        throw new Error('No hay cartas en la baraja');
    }
    return deck.pop();
}