alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
console.log(numeroSecreto)
let tentativas = 1;

//enqanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 0 a ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        // break para o while caso a pessoa acerte de primeira.
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

