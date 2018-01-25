
//função normal
let dobro =  function(a) {
    return 2 * a
}

// sebrescrevendo com arrow

dobro = (a) =>{
    return 2 * a
}

// função arrow function redusida, com return implicioto 

dobro =  a => 2 * a

//teste
console.log(dobro(Math.PI)) //para testa o dobro do pi 3,1415...


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


