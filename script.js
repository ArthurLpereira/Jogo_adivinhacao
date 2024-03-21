const readline = require('readline-sync');
continuar = 0

function dificuldade() {
    var resposta = readline.question("\nEscolha o nivel de dificuldade: [facil] [medio] [dificil]: ");

    if (resposta === 'facil') {
        return 15;
    } else if (resposta === 'medio') {
        return 20;
    } else if (resposta === 'dificil') {
        return 30;
    } else {
        console.log("Essa dificuldade nao existe");
        return null;
    }
}

do {
    let pontuacao = 100;


    console.log("Bem-vindo ao jogo");
    console.log("\nRegras: \n\nVocê deve escolher o nivel de dificuldade; \n\nLogo apos, um número aleatorio sera gerado;\n\nAs tentativas serao limitadas;\n\nVoce comeca com 100 pontos, a cada tentativa errada perde 10.")

    var respostaUsuario = dificuldade();

    switch (respostaUsuario) {
        case 15:
            console.log("O numero está entre 1 e 15\n\n Voce tem 6 tentativas");
            var numaleatorio = Math.floor(Math.random() * 15) + 1;
            var tentativas = 0;
            var num;

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
                pontuacao -= 10
            }

            if (tentativas > 6) {
                console.log("Voce excedeu o numero de tentativas. O numero era " + numaleatorio + ".");
            } else {
                console.log("Voce tentou: " + tentativas + " vezes.");
            }
            console.log("A sua pontuacao foi " + pontuacao)
            break;

        case 20:
            console.log("O numero esta entre 1 e 20/n/n Voce tem 5 tentativas");
            var numaleatorio = Math.floor(Math.random() * 20) + 1;
            var tentativas = 0;
            var num;

            for (tentativas = 1; tentativas <= 5; tentativas++) {
                num = readline.question("Tentativa " + tentativas + ": Escolha um numero: ");

                if (parseInt(num) === numaleatorio) {
                    console.log("Acertou o numero!");
                    break;
                } else if (parseInt(num) < numaleatorio) {
                    console.log("O numero e maior.");
                } else {
                    console.log("O número é menor.");
                }
                pontuacao -= 10
            }

            if (tentativas > 5) {
                console.log("Você excedeu o número de tentativas. O numero era " + numaleatorio + ".");
            } else {
                console.log("Voce tentou: " + tentativas + " vezes.");
            }
            console.log("A sua pontuacao foi " + pontuacao)
            break;

        case 30:
            console.log("O numero está entre 1 e 30\n\nVoce tem 5 tentativas");
            var numaleatorio = Math.floor(Math.random() * 30) + 1;
            var tentativas = 0;
            var num;

            for (tentativas = 1; tentativas <= 5; tentativas++) {
                num = readline.question("Tentativa " + tentativas + ": Escolha um numero: ");

                if (parseInt(num) === numaleatorio) {
                    console.log("Acertou o numero!");
                    break;
                } else if (parseInt(num) < numaleatorio) {
                    console.log("O numero e maior.");
                } else {
                    console.log("O numero e menor.");
                }
                pontuacao -= 10
            }

            if (tentativas > 5) {
                console.log("Voce excedeu o numero de tentativas. O numero era " + numaleatorio + ".");
            } else {
                console.log("Voce tentou: " + tentativas + " vezes.");
            }
            console.log("A sua pontuacao foi " + pontuacao)
            break;
        default:
            break;

    }

    continuar = readline.question("Deseja continuar ?")

} while (continuar.toLowerCase() == "sim")