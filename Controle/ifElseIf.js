Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    try{ //try para tratar o erro de setar uma string ao inves de numero ae vai para o campo catch
    if (nota.entre(9 , 10)){
        console.log('Aprovado com Quadro de honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }
    } catch (e)
    {
        console.log('Nota Inválida')
    }

}

imprimirResultado(3.5)
imprimirResultado(4.5)
imprimirResultado(7.1)
imprimirResultado(9.5)
imprimirResultado(-9.5)
imprimirResultado('teste')