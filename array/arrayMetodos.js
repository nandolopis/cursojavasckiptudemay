const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //push add elemento do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elelmento do array!
console.log(pilotos)

pilotos.unshift('Hamilton') //add um elemento do primeiro indice
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)