import { createDeck, pickCard, createCard, acumulatePoints, PCTurn, startGame } from './usecases';
/*
2C = Two of Clubs (Tréboles)
2D = Two of Diamonds (Diamantes)
2H = Two of Hearts (Corazones)
2S = Two of Spades (Espadas)
*/
const Play = (() => { //Protegemos el código para que no se pueda modificar desde la consola.
    'use strict';
    let playersPoints = [];
    let deck = [];

    const audioSrc = 'assets/flipcard.mp3';
    let flipCardAudio = new Audio(audioSrc);

    //Referencias html    
    const btnPick = document.querySelector('#btnPick'),
        btnStop = document.querySelector('#btnStop'),
        btnNew = document.querySelector('#btnNew');

    const divPlayersCards = document.querySelectorAll('.cardDiv'),
        HTMLPoints = document.querySelectorAll('small');

    //Eventos
    btnPick.addEventListener('click', () => {

        flipCardAudio.currentTime = 0; // Reiniciamos el audio para que se reproduzca desde el inicio
        flipCardAudio.play();
        
        btnStop.disabled = false; //Hasta que no pidan la primera carta, no se puede parar

        const card = pickCard(deck);
        const playerPoints = acumulatePoints(playersPoints, HTMLPoints, card, 0);
        createCard(divPlayersCards, card, 0);

        if (playerPoints >= 21) {
            btnPick.disabled = true;
            btnStop.disabled = true;
            btnNew.disabled = false;
            PCTurn(playerPoints, playersPoints, HTMLPoints, divPlayersCards, deck);
        };
    })

    btnStop.addEventListener('click', () => {
        btnPick.disabled = true;
        btnStop.disabled = true;
        PCTurn(playersPoints[0], playersPoints, HTMLPoints, divPlayersCards, deck);
        btnNew.disabled = false;
    })

    btnNew.addEventListener('click', async () => {
        deck = await createDeck();
        playersPoints = [];
        startGame(playersPoints);
        btnNew.disabled = true;
    })

})();