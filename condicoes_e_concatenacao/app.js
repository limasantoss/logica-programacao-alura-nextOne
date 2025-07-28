alert('Boas vindas ao jogo do  numero secreto')
let numeroSecreto = 9;
console.log(`Resposta correta ${numeroSecreto}`)
let chute

//enquanto não for igual ao numero secreto 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 a 10')
    //se chute for igual ao numero secreto 
    if (chute == numeroSecreto) {
        alert(`Isso ai !!!! você descobriu o número secreto ${numeroSecreto} `);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`)

        } else {
            alert(`O numero secreto é maior que  ${chute}`)
        }

    }
    }
    
    
