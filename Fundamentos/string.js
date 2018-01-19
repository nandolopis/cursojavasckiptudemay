const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //javascript nao vai gerar erro
console.log(escola.charCodeAt(3)) //codigo unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!')) //concatenar
console.log('Escola '+ escola + '!') //concatenar
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))//com regex

console.log('Ana,Maria,Pedro'.split(',')) //Gerar Array
console.log('Ana,Maria,Pedro'.split(/,/)) //Gerar Array com regex
