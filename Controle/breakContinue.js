const num = [1,2,3,4,5,6,7,8,9,10]
for(let x in num){
    if(x == 5){
        break // nao age em um bloco de codigo do tipo if 
    }
    console.log(`indice break ${x} = ${x}`)
}

for(let x in num){
    if(x == 5){
       continue
    }
    console.log(`indice continue ${x} = ${x}`)
}

//rotulo 
externo://evitar usar essa estrutura
for(let a in num) {
    for (let b in num) {
        if(a == 2 && b ==3) {
            break externo
            console.log(`par = ${a}, ${b}`)
        }
    }
}