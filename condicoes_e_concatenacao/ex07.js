let numeroCorreto = 10
let pontuacao = Number(prompt("Tente acertar o Numero "))
console.log(`Numero Correto ${numeroCorreto}`)
if (numeroCorreto == pontuacao) {
    alert(`Parabéns acertou o Numero !  ${numeroCorreto} `)
} else {
    alert(`Você errou o numero ! Não é ${pontuacao} tente novamente para Ganhar`)
}