const readline = require('readline-sync');
continuar = 0

// Função para selecionar a dificuldade (no vs)
// JÁ FOI FEITO
function dificuldade() {
    var resposta = readline.question("\nDigite o nivel de dificuldade: [facil] [medio] [dificil]: ");
    var num_colocar;
    if (resposta === 'facil') {
        return num_colocar = 20;
    } else if (resposta === 'medio') {
        return num_colocar = 50;
    } else if (resposta === 'dificil') {
        return num_colocar = 200;
    } else {
        console.log("Essa dificuldade nao existe");
        return null;
    }
}

//Função do jogo
function game(num_colocar) {
    console.log("O numero está entre 1 e " + num_colocar + "\n Voce tem 6 tentativas");
    var numaleatorio = Math.floor(Math.random() * num_colocar) + 1;
    var tentativas = 0;
    var num;
    let pontuacao = pontuacao_inicial;

    for (tentativas = 1; tentativas <= 6; tentativas++) {
        num = readline.question("Tentativa " + tentativas + ": Escolha um numero: ");
        if (parseInt(num) === numaleatorio) {
            console.log("Acertou o numero!");
            break;
        } else if (parseInt(num) < numaleatorio) {
            console.log("O numero e maior.");
        } else {
            console.log("O numero e menor.");
        }
        pontuacao -= reducao;
    }

    if (tentativas > 6) {
        console.log("Voce excedeu o numero de tentativas. O numero era " + numaleatorio + ".");
        console.log("\nO número era " + numaleatorio);
        pontuacao = 0;
    } else {
        console.log("Voce tentou: " + tentativas + " vezes.");

    }
    console.log("A sua pontuacao foi " + pontuacao)
}

// Loop do jogo
do {
    console.log("Bem-vindo ao jogo");
    console.log("\nRegras: \n\nVocê deve escolher o nivel de dificuldade; \n\nLogo apos, um número aleatorio sera gerado;\n\nAs tentativas serao limitadas;\n\nVoce comeca com 100 pontos, a cada tentativa errada perde 10.")
    var respostaUsuario = dificuldade();
    switch (respostaUsuario) {
        //Modo facil
        case 20:
            console.log(game(20))
            var reducao = 10
            var pontuacao_inicial = 5;  
            break;
        case 50:
            //Modo medio
            console.log(game(50))
            var reducao = 10
            var pontuacao_inicial = 5;  
            break;
        case 200:
            //Modo dificil
            console.log(game(200))
            var reducao = 10
            var pontuacao_inicial = 5;  
            break;
        default:
            break;
    }
    continuar = readline.question("Deseja continuar ? Se quiser digite 'sim' ")
} while (continuar.toLowerCase() == "sim")
