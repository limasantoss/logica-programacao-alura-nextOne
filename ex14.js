//Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

let idade = Number(prompt('Qual a sua idade'))

if (idade >= 18) {
    alert('Idade correta, pode tirar a Habilitação ')
} else{
    alert('Idade incorreta')
}