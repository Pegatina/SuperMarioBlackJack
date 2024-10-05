/**
 * Función para pre-cargar todas las imágenes de cartas al inicio.
 * @param {Array<String>} cards - Array que contiene los nombres de las cartas a pre-cargar.
 */
export const preloadCards = async (cards) => {
    const preloadImage = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
        });
    };

    const preloadPromises = cards.map(card => {
        const imagePath = `assets/cards/${card}.png`;
        return preloadImage(imagePath);
    });

    await Promise.all(preloadPromises);
};
