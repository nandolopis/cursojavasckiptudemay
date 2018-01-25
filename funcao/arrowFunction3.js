let comparaComThis =  function (param) {
    console.log(this === param)
}
comparaComThis(global)
comparaComThis(this)


console.log('')
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
console.log('')

// explo com arrow function
let comporaComThisArrow =  param => console.log(this === param)
comporaComThisArrow(global)
comporaComThisArrow(module.exports)
comporaComThisArrow(this)

console.log('')
comporaComThisArrow = comporaComThisArrow.bind(obj)
comporaComThisArrow(obj)
comporaComThisArrow(module.exports)
