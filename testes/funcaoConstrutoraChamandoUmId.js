const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }else{
            console.log("Sequencia violada!")
        }
    }
}

function recruta(nome, midInicial, quantidadeDeCiclos){
    let totaldemidi = midInicial
    let status = "Padawan"
    const id = sequencia.valor

    this.calculo = function() {
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
    }
    this.getRecruta = function () {
        return {
            id,
            nome,
            midInicial ,
            quantidadeDeCiclos,
            totaldemidi,
            status
        }
    }
}

const jedi = new recruta("fernando", 1200, 10)
jedi.calculo()
console.log(jedi.getRecruta())
console.log(jedi)

const jedi2 = new recruta("artur", 1000, 6)
jedi2.calculo()
console.log(jedi2.getRecruta())