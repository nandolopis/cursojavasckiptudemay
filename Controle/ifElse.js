const imprimirResultado = function(nota) {
    if(nota >= 7  ) {
        console.log("Aprovado! com a nota :", + nota)
    } else  {
        console.log("Reprovado! com a nota :", + nota)
    } 
}

imprimirResultado(6.1)
imprimirResultado(8.1)
imprimirResultado('Epa!') //cuidado!!

