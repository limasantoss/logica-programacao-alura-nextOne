alert('Boas vindas ao jogo do  numero secreto')
let numerSecreto = 4;
console.log(numerSecreto)
let chute = Number(prompt('escolha um numero entre 1 a 10'))

//se chute for igual ao numero secreto 
if (numero == chute) {
    alert(`Isso ai" você descobriu o número secreto ${numerSecreto} `);
} else {
    alert('Você errou :( ')
}