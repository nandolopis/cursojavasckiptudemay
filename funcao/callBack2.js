const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])//push é para adicionar um elemento no array
    }
}

console.log(notasBaixas1)
console.log("--------------------")

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7 //exp com  arrow function que pode ser usando em varios locais 

const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)