/**
 * Función para pre-cargar el sonido de la carta.
 * @param {String} audioSrc - Variable que contiene el audio a pre-cargar.
 */
export const preloadAudio = (audioSrc) => {
    return new Promise((resolve, reject) => {
        const audio = new Audio(audioSrc);
        audio.onloadeddata = resolve;
        audio.onerror = reject;
        audio.load();
    });
};