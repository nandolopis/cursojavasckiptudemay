let a = 3

global.b = 123
this.c = 456

this.d = false
this.e = 'teste'
// console.exports = {e: 426, f: true, g: "testo2"}

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma vaiavel maluca: sem var e let!

abc = 3 // nao fazer isso
console.log(global.abc)
