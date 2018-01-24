//Função em JS  é First-Class Object (Citezens)
//higher-order function

//criar de forma literal
function nome1(){ }

//armazenar em uma variavel
const nome2 = function() { }

//armazenar em um array
const array = [function(a, b) { return a + b}, nome1, nome2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {} //cdriado o objeto
obj.falar = function () { return 'opa'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
    fun()//invacando a função tem q ta com o ()
}
run(function(){console.log('executando...')})

//uma funcao pode retorna/conter uma funcao
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)
//outra maneira de chama armazenando em uma variavel
const cincoMais = soma(2,3)
cincoMais(4)