let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let escolhaComputer = document.querySelector(".escolha-computer");
let escolhaJogador = document.querySelector(".escolha-jogador");
let pontosJogador = document.querySelector(".jogador-pontos")
let pontosComputer = document.querySelector(".computer-pontos");
let pedra = document.querySelector(".pedra");
let papel = document.querySelector(".papel");
let tesoura = document.querySelector(".tesoura");
let pontosJogadorValue = 0;
let pontosComputerValue = 0;
let opcoes = ["🪨", "📄", "✂️"];


pedra.addEventListener("click", () => {
let escolha = opcoes[Math.floor(Math.random() * opcoes.length)];

    escolhaJogador.innerHTML = "🪨";
    if (escolha === "🪨") {
        escolhaComputer.innerHTML = escolha;
        text1.innerHTML = "Empate!";
        text2.innerHTML = `Pedra empata com Pedra`;
        
    }
    else if (escolha === "📄") {
        escolhaComputer.innerHTML = escolha;
        text1.innerHTML = "Você perdeu!";
        text2.innerHTML = `Pedra perde para Papel`;
        pontosComputerValue++;
        pontosComputer.innerHTML = pontosComputerValue;
    } else {
        escolhaComputer.innerHTML = escolha;
        text1.innerHTML = "Você ganhou!";
        text2.innerHTML = `Pedra ganha de Tesoura`;
        pontosJogadorValue++;
        pontosJogador.innerHTML = pontosJogadorValue;
}
    if (pontosComputerValue === 3) {
        alert("O computador venceu, Fim Do Jogo!");
        window.location.reload();
    }
    else if (pontosJogadorValue === 3) {
        alert("Você venceu, Fim Do Jogo!");
        window.location.reload();
    }
}
)
papel.addEventListener("click", () => {
    let escolha = opcoes[Math.floor(Math.random() * opcoes.length)];

    escolhaJogador.innerHTML = "📄";
    if (escolha === "📄") {
        escolhaComputer.innerHTML = escolha;
        text1.innerHTML = "Empate!";
        text2.innerHTML = `Papel empata com Papel`; 

    }
    else if (escolha === "✂️") {
        escolhaComputer.innerHTML = escolha;
        text1.innerHTML = "Você perdeu!";
        text2.innerHTML = `Papel perde para Tesoura`;
        pontosComputerValue++;
        pontosComputer.innerHTML = pontosComputerValue;
    } else {
        escolhaComputer.innerHTML = escolha;
        text1.innerHTML = "Você ganhou!";
        text2.innerHTML = `Papel ganha de Pedra`;
        pontosJogadorValue++;
        pontosJogador.innerHTML = pontosJogadorValue;
    }
    if (pontosComputerValue === 3) {
        alert("O computador venceu, Fim Do Jogo!");
        window.location.reload();
    }
    else if (pontosJogadorValue === 3) {
        alert("Você venceu, Fim Do Jogo!");
        window.location.reload();
    }
})
tesoura.addEventListener("click", () => {
    let escolha = opcoes[Math.floor(Math.random() * opcoes.length)];

    escolhaJogador.innerHTML = "✂️";
    if (escolha === "✂️") {
        escolhaComputer.innerHTML = escolha;
        text1.innerHTML = "Empate!";
        text2.innerHTML = `Tesoura empata com Tesoura`;
        
    }
    else if (escolha === "🪨") {
        escolhaComputer.innerHTML = escolha;
        text1.innerHTML = "Você perdeu!";
        text2.innerHTML = `Tesoura perde para Pedra`;
        pontosComputerValue++;
        pontosComputer.innerHTML = pontosComputerValue;
    } else {
        escolhaComputer.innerHTML = escolha;
        text1.innerHTML = "Você ganhou!";
        text2.innerHTML = `Tesoura ganha de Papel`;
        pontosJogadorValue++;
        pontosJogador.innerHTML = pontosJogadorValue;
    }
       if (pontosComputerValue === 3) {
        alert("O computador venceu, Fim Do Jogo!");
        window.location.reload();
    }
    else if (pontosJogadorValue === 3) {
        alert("Você venceu, Fim Do Jogo!");
        window.location.reload();
    }
})
