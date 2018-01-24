//randomico que retorna 6 numeros aleatorios de  1 a 60

const setRandomico = function(min, max){
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//mostrando apartir do for
for(let i = 1; i <= 6; i++){
console.log(setRandomico(1, 60))
}
//mostra da mesma linha
console.log( setRandomico(1, 60), setRandomico(1, 60),setRandomico(1, 60),setRandomico(1, 60),setRandomico(1, 60),setRandomico(1, 60) )