function funcaoContrutoria(velocidadeLimite = 200, delta = 5 ){
    let velocidadeAtual = 0

    this.velocidade = function () {
        if (velocidadeAtual + delta <= velocidadeLimite){
            velocidadeAtual += delta
    }else {
        velocidadeAtual = velocidadeLimite
        }
    }

    this.getVelocidade =  function () {
        return velocidadeAtual
    }
}

const uno =  new funcaoContrutoria

uno.velocidade()
console.log(uno.getVelocidade())
uno.velocidade()
console.log(uno.getVelocidade())
uno.velocidade()
console.log(uno.getVelocidade())
uno.velocidade()
console.log(uno.getVelocidade())

const celta =  new funcaoContrutoria(250 , 10)
celta.velocidade()
console.log(celta.getVelocidade())
celta.velocidade()
console.log(celta.getVelocidade())
celta.velocidade()
console.log(celta.getVelocidade())
celta.velocidade()
console.log(celta.getVelocidade())
