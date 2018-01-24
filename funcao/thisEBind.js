const pessoa = {
    saudacao:  'bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
//explo de quando um this varia e tentar jogar o obj pessoa em uma constante
const falar =  pessoa.falar
falar() // gera um conflito entre paradigmas: funcional com a orientada a objeto

//resonvendo isso com um bind que amarra o this com o obj declarado na sua estrutura bind(obj) 
//ou seja o bind cria outra função para amarrar o this

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
