function getInteiroAleatorioEnter(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opção = 0

do {

    opcao = getInteiroAleatorioEnter(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)

} while(opcao != -1)