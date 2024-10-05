import JSConfetti from 'js-confetti';
import Swal from 'sweetalert2';

/**
 * Función que permite conocer el ganador mediante unas alertas unos segundos después de que termine el juego.
 * Si ganas, sale un confeti bastante molón.
 * @param {Array} playersPoints - array de los puntos de los jugadores
 */

export const getWinner = (playersPoints) => {

    const [minPoints, PCPoints] = playersPoints;

    if (PCPoints === minPoints) {
        Swal.fire({
            title: '¡Empate!',
            text: 'Esa ha sido una partida reñida... ¡Vuelve a intentarlo!',
            icon: 'info',
            confirmButtonText: 'Ok'
        });
        return;
    } else if (minPoints > 21 || (PCPoints <= 21 && PCPoints > minPoints)) {
        Swal.fire({
            title: 'Lo siento',
            text: 'Has perdido, ¡vuelve a intentarlo!',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
        return;
    } else if (minPoints === 21 || PCPoints > 21 || (PCPoints < minPoints && minPoints < 21)) {
        Swal.fire({
            title: '¡Enhorabuena!',
            text: '¡Has ganado la partida!',
            icon: 'success',
            confirmButtonText: 'Genial'
        }).then(() => {
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti();
        });
        return;
    }
}