//gerar um valor aleatorio
function getInteiroAleatorioEnter(min, max) {
    const valor = Math.random() * (max - min) + min //o valor 'Math.random()' gera um valor aleatorio 
    return Math.floor(valor)
}

let opcao = 0
while(opcao != -1){

    opcao = getInteiroAleatorioEnter(-1, 10 )
    console.log(`Opção escolhida foi ${opcao}`)

}
console.log('Até a próxima!')
