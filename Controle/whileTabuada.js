//laço de repetição while para imprimir a tabuada ate o 10
let i = 0
let t = 1
while(t <= 10){
    if(i == 11){
        ++t
        i = 0
    } else {
    let calc = i * t
    console.log(`${t} x ${i} = ${calc}`)
    i++ }
}