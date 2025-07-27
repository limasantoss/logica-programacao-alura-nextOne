alert('Boas vindas ao jogo do  numero secreto')
let numero = 5
let chute = Number(prompt('escolha um numero entre 1 a 10'))
console.log("Resposta correta é  " + numero)
//se chute for igual ao numero secreto 
if (numero === chute) {
    alert("Você acertou")
} else {
    alert('Você errou')
}