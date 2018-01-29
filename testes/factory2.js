function criarProduto(nome, preco) {
    const desconto = 0.1
    precoNovo =  preco - preco * desconto 
    
    return {
        nome,
        preco,
        desconto,
        precoNovo
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))