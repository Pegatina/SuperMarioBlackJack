import _ from 'underscore';
import { preloadCards } from './preload-Cards';
import { preloadAudio } from './preload-Audio';
/**
 * Función que crea una nueva baraja cada partida y precarga las imágenes de las cartas.
 * @param {Array<String>} cardTypes - Por ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<String>} specialCardTypes - Por ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} devuelve la nueva baraja de cartas
 */
export const createDeck = async () => {
    const cardTypes = ['C', 'D', 'H', 'S'];
    const specialCardTypes = ['A', 'J', 'Q', 'K'];

    let deck = [];

    // Generamos las cartas numéricas
    for (let i = 2; i <= 10; i++) {
        for (const type of cardTypes) {
            deck.push(i + type);
        }
    }

    // Generamos las cartas especiales
    for (const type of cardTypes) {
        for (const sp of specialCardTypes) {
            deck.push(sp + type);
        }
    }

    // Pre-cargamos las imágenes de las cartas
    await preloadCards(deck);

    // Pre-cargamos el sonido de la carta
    const audioSrc = 'assets/flipcard.mp3'; // Ruta del sonido
    await preloadAudio(audioSrc);

    // Devolvemos la baraja barajada
    return _.shuffle(deck);
};