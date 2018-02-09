// Object.preventExtensions - cria um obj que nao pode adicionado novos atributos mas podera ser excluido
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - sela o obj ou seja nao consegue modificar nem excluir os atributos 
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) //apartir daqui o obj esta selado!
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = ao obj selado com  valores constantes