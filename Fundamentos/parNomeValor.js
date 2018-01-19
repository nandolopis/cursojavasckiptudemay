//par nome/valo
const saudacao = "opa" //contexo léxico 1

function exec(){
    const saudacao = "falaa" //contexto léxico 2
    return saudacao 
}

//objetos sao grupos alinhado de pares chave/valor
const cliente = {
    nome: "fernando",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "rua muito legal",
        numero:123

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)