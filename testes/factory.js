

function recluta(nome, midInicial, quantidadeDeCiclos){
    let totaldemidi = midInicial
    let status = "Padawan"

    for(let i = 1 ; i <=  quantidadeDeCiclos ; i++){
        if(i % 2 != 0){
            totaldemidi += totaldemidi + 1000
        } else{
            totaldemidi += totaldemidi * 2
        }
    }

    if(totaldemidi <= 100000 ){
        status = "Padawan"
    } else if(totaldemidi < 1000000){
        status = "Jedi"
    } else {
        status = "Mestre Jedi"
    }

    return {
        nome,
        midInicial ,
        quantidadeDeCiclos,
        totaldemidi,
        status
    }
}

console.log(recluta("fernando", 1200,20))
console.log(recluta("Helene", 200,5))

const obj = new recluta("Artur", 1000,5)
console.log(`O Recruta ${obj.nome} com ${obj.midInicial} Midclorians iniciais e com ${obj.quantidadeDeCiclos} ciclos de treinamento para fazer, vai se tornar um ${obj.status} com o total de ${obj.totaldemidi}`)
