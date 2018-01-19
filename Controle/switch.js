const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Aprovado, com Quadro de honra com a nota: ', nota)
            break
        case 8:
        case 7:
            console.log('Aprovado, com a nota: ', nota)
            break
        case 6:
        case 4:
            console.log('Recuperação, com a nota: ', nota)
            break
        case 3: case 2:  case 1: case 0:
            console.log('Reprovado, com a nota: ', nota)
            break
        default:
            console.log('nota invalida: ', nota)

    }
}

imprimirResultado(2.5)
imprimirResultado(3.5)
imprimirResultado(4.5)
imprimirResultado(7.1)
imprimirResultado(9.5)
imprimirResultado(-9.5)