let contador = 1
while(contador <= 10) {
    console.log(`contador While = ${contador}`)
    contador++
}
// for(declaração da variavel ; expreção do laço ;  imcremento)
for(let i = 1; i <= 10; i++){
    console.log(`Contador for = ${i}`)
}

const nota = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < nota.length; i++ ) {//length é o comprimento do array
    console.log(`nota = ${nota[i]}`)
}