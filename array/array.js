console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

//add elemento do array
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length) //length para ver o tamanho do array 

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //função altera o array ordenando-a 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//splice excluindo elementos
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)
//splice excluindo e add novo elementos
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1','Elemento2')
console.log(aprovados)
//splice add novo elemento apartir do indice que foi identificado
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(3, 0, 'Elemento1','Elemento2')
console.log(aprovados)