const Special_cards = {
    J: 10,
    Q: 10,
    K: 10,
    A: 11
}

/**
 * Función que obtiene el valor de la carta, Las cartas puntúan lo mismo que su número, 
 * las cartas especiales puntúan 10 menos el as, que en este juego solo puntúa 11.
 * @param {String} card - La carta obtenida
 * @returns {Number} valor numérico de la carta
 */
export const cardValue = (card) => {
    //Le quitamos el palo
    const stringValue = card.substring(0, card.length - 1);
    const value = parseInt(stringValue, 10);
       
    if(isNaN(value)) return Special_cards[stringValue];
    return value;
}