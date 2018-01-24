const setValorRandomico = function(min, max){
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(setValorRandomico(2, 10))