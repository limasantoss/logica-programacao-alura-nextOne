alert('Boas vindas ao jogo do  numero secreto')
let numeroSecreto = 9;
console.log(`Resposta correta ${numeroSecreto}`)
let chute = Number(prompt('escolha um numero entre 1 a 10'))

//se chute for igual ao numero secreto 
if (numeroSecreto == chute) {
    alert(`Isso ai !!!! você descobriu o número secreto ${numeroSecreto} `);
} else {
    alert(`Você errou :( escolheu o numero   ${chute} ,  numero correto é ${numeroSecreto}`)
}