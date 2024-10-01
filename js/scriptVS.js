const readline = require('readline-sync');
continuar = 0;

// Função para selecionar a dificuldade (no vs)
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

// Função do jogo
function game(num_colocar, tentativas) {
    console.log("O número está entre 1 e " + num_colocar + "\nVocê tem " + tentativas + " tentativas.");
    var numaleatorio = Math.floor(Math.random() * num_colocar) + 1;
    var num;
    let pontuacao = pontuacao_inicial;

    for (let tentativaAtual = 1; tentativaAtual <= tentativas; tentativaAtual++) {
        num = readline.question("Tentativa " + tentativaAtual + ": Escolha um número: ");
        if (parseInt(num) === numaleatorio) {
            console.log("Acertou o número!");
            break;
        } else if (parseInt(num) < numaleatorio) {
            console.log("O número é maior.");
        } else {
            console.log("O número é menor.");
        }
        pontuacao -= reducao;
    }

    if (tentativas > 6) {
        console.log("Você excedeu o número de tentativas. O número era " + numaleatorio + ".");
        pontuacao = 0;
    }
    console.log("Sua pontuação foi: " + pontuacao);
}

// Loop do jogo
do {
    console.log("Bem-vindo ao jogo");
    console.log("\nRegras: \n\nVocê deve escolher o nível de dificuldade; \n\nLogo após, um número aleatório será gerado;\n\nAs tentativas serão limitadas;\n\nVocê começa com 100 pontos, a cada tentativa errada perde 10.");
    
    var respostaUsuario = dificuldade();
    var reducao = 10;
    var pontuacao_inicial = 100;
    var tentativas;  // Declaração da variável `tentativas` fora do switch

    switch (respostaUsuario) {
        // Modo fácil
        case 20:
            tentativas = 10;  // Definindo o número de tentativas para o modo fácil
            game(20, tentativas);
            break;
        // Modo médio
        case 50:
            tentativas = 6;  // Definindo o número de tentativas para o modo médio
            game(50, tentativas);
            break;
        // Modo difícil
        case 200:
            tentativas = 3;  // Definindo o número de tentativas para o modo difícil
            game(200, tentativas);
            break;
        default:
            console.log("Dificuldade inválida!");
            break;
    }
    
    continuar = readline.question("Deseja continuar? Se quiser, digite 'sim': ");
} while (continuar.toLowerCase() == "sim");
