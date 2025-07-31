



alert( 'Boas vindas ao jogo do  numero secreto' );
let numeroSecreto = 9;
console.log(`Resposta correta ${numeroSecreto}`);
let chute
let tentativas = 1

//enquanto chute não for igual ao numero secreto 
while ( chute !== numeroSecreto ) {
    chute = prompt('escolha um numero entre 1 a 10')
    if ( chute == numeroSecreto ) {
        break
    } else {
        if ( chute > numeroSecreto ) {
            alert(`O numero secreto é menor que ${chute}`)
        } else {
            alert(` O número secreto é mairo que ${chute}`)
        }
        tentativas++;
    }
}
if(tentativas > 1 ){
    alert(` isso ai ! você acertou ${numeroSecreto} com ${tentativas} tentivas `)
}else{
    alert( ` Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa. `)
}