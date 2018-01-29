const setRandomico = (min, max) => {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let sorteioRandomico = (a, b) => {

    setInterval(() => {
       console.log( setRandomico(a , b))
    }, 1000)
}

sorteioRandomico(1, 60)
