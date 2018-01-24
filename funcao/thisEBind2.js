function Pessoa(){
    this.idade = 0
    //setInterval é um teporizador 
    /* da um NaN
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
    */
    /*
    //com o bind para acha o this
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)*/
    //outro dible criando uma const self
    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)


}

new Pessoa