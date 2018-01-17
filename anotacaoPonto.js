console.log(Math.ceil(6.1))

const obj1 = {} 

obj1['nome'] = "bola2"
console.log(obj1)
obj1.nome = "bola"
console.log(obj1)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log(nome)
    }
    
}

const obj2 = new Obj("Cadeira")
const obj3 =  new Obj("mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
obj3.exec()
