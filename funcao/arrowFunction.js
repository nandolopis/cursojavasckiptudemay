
//função normal
let dobro =  function(a) {
    return 2 * a
}

// sebrescrevendo com arrow

dobro = (a) =>{
    return 2 * a
}

// com retorno implicioto 

dobro =  a => 2 * a
console.log(dobro(Math.PI))

//###########################

//função normal sem parametro
let ola =  function(){
    return 'Olá'
}

//refatorando com  arrow
ola = () => 'ola'
//outra forma
ola = _=> 'ola'//_ é im parametro

console.log(ola())


