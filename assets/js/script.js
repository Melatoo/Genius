let order = [];
let clickedOrder = [];
let score = 0;

//0 - blue
//1 - red
//2 - green
//3 - yellow

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria a ordem das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor (elementColor, Number(i) + 1); 
    }
}

//Faz a cor selecionada ficar opaca
let lightColor = (element, time) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, time - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

//Checa se a ordem do jogador é a ordem correta
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Bora pro próximo nível!` );
        nextLevel();
    }
}

//Define o que o click na cor vai fazer
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//Seta as cores como números
let createColorElement = (color) => {
    if (color == 0) {
        return blue;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return green;
    } else if (color == 3) {
        return yellow;
    }
}

//Próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Se o jogador perder
let lose = () => {
    alet(`Pontuação: ${score}\nVocê perdeu..!\nClique em OK pra jogar denovo!`);
    order = [];
    clickedOrder = [];
    
    playGame();
}

//Começo de jogo
let playGame = () => {
    alert ('Bem vindo ao Genius do Melato! Bora jogar!')
    score = 0;
    
    nextLevel();
}



blue.onclick = () => click(0);
red.onclick = () => click(1);
green.onclick = () => click(2);
yellow.onclick = () => click(3);

playGame ();
