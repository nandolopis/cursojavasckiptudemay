class Lancamento {
    constructor(nome = "Generico", valor = 0){
        this.nome = nome
        this.valor = valor
        this.data = new Date()
    } 
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.movimento = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(novoLancamento => this.movimento.push(novoLancamento))
    }

    saldo(){
        let valorConsolidado = 0 
        this.movimento.forEach(novoLancamento => {
                            valorConsolidado += novoLancamento.valor 
                            })
        return valorConsolidado
    }
}

function saldo(numero){
    var numero = numero.toFixed(2).split('.')
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.')
    return numero.join(',')
}


const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contaDAgua = new Lancamento('Agua', -100)


const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, contaDAgua )



console.log(contas)
console.log(contas.saldo())
const saldos = saldo(contas.saldo())
console.log(`seu saldo é de ${saldos}`)
