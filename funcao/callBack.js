const fabricantes = ["Mercedes", "Audi", "BMW"]


function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)//para cada elemento do array o "forEach" vai chamar
//exemplo de forEach criando uma funçao nele
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
//exemplo com arrow function
fabricantes.forEach(fabricante => console.log(fabricante))