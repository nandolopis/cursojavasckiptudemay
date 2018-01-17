let valor
console.log(valor)


valor = null //null que dizer a ausêcia de valor
console.log(valor)
//console.log(valor.toString()) //Erro "TypeError: Cannot read property 'toString' of null"

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)

