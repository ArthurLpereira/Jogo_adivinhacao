let numaleatorio;
let pontuacao;
let tentativas;

// Adiciona evento ao botão de escolher a dificuldade
document.getElementById('confirmar_dificuldade').addEventListener('click', function() {
    const dificuldade = document.getElementById('escolher_dificuldade').value;
    if (!dificuldade) {
        alert('Por favor, escolha uma dificuldade.');
        return;
    }

    switch (dificuldade) {
        case 'facil':
            numaleatorio = Math.floor(Math.random() * 20) + 1;
            tentativas = 6;
            break;
        case 'medio':
            numaleatorio = Math.floor(Math.random() * 50) + 1;
            tentativas = 5;
            break;
        case 'dificil':
            numaleatorio = Math.floor(Math.random() * 200) + 1;
            tentativas = 5;
            break;
        default:
            alert('Dificuldade inválida.');
            return;
    }


    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('attemptsInfo').innerText = `Você tem ${tentativas} tentativas.`;
    document.getElementById('feedback').innerText = '';
    pontuacao = 100; 
    document.getElementById('score').innerText = `Pontuação: ${pontuacao}`;
});

// Adiciona eventos aos botões de controle
document.getElementById('buttonMais').addEventListener('click', function() {
    const inputNum = document.getElementById('colocar_num');
    inputNum.value = parseInt(inputNum.value) + 1 || 1;
});

document.getElementById('buttonMenos').addEventListener('click', function() {
    const inputNum = document.getElementById('colocar_num');
    inputNum.value = Math.max((parseInt(inputNum.value) || 1) - 1, 1);
});

// Processa o palpite do jogador
document.getElementById('confirmar_palpite').addEventListener('click', processGuess);

function processGuess() {
    const num = parseInt(document.getElementById('colocar_num').value);
    if (isNaN(num)) {
        alert('Por favor, digite um número válido.');
        return;
    }


    if ((tentativas === 6 && (num < 1 || num > 20)) || 
        (tentativas === 6 && (num < 1 || num > 50)) || 
        (tentativas === 5 && (num < 1 || num > 200))) {
        alert('Número fora do intervalo permitido!');
        return;
    }

    tentativas--;

    if (num === numaleatorio) {
        document.getElementById('feedback').innerText = "Acertou o número!";
        document.getElementById('guessDisplay').value = numaleatorio;
        document.getElementById('guessDisplay').classList.add('verde');
        document.getElementById('reiniciar-container').style.display = 'block';
    } else {
        if (tentativas <= 0) {
            document.getElementById('guessDisplay').value = numaleatorio;
            document.getElementById('guessDisplay').classList.add('vermelho');
            document.getElementById('feedback').innerText = `Você não tem mais tentativas. O número era ${numaleatorio}.`;
            document.getElementById('reiniciar-container').style.display = 'block';
        } else {
            document.getElementById('feedback').innerText = "Errou! Tente novamente.";
            if (num < numaleatorio) {
                document.getElementById('feedback').innerText += " O número é maior.";
            } else {
                document.getElementById('feedback').innerText += " O número é menor.";
            }
        }
    }

    pontuacao -= 10;
    document.getElementById('score').innerText = `Pontuação: ${pontuacao}`;

    if (tentativas > 0) {
        document.getElementById('attemptsInfo').innerText = `Você tem ${tentativas} tentativas restantes.`;
    }
}

// Evento para reiniciar o jogo
document.getElementById('reiniciar_jogo').addEventListener('click', function() {
    location.reload();
});
