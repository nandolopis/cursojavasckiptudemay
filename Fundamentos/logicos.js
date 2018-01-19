function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // operador logico or (OU)
    const comparTv50 = trabalho1 && trabalho2 //operador is (é) 
    const comprarTv32 = trabalho1 != trabalho2 //a diferança simula o xor (ou exclusivo)
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //autermativa botwise xor (ou exclusivo)
    const manterSaudavel = !comprarSorvete //operador unario

    return{ comprarSorvete, comparTv50, comprarTv32,manterSaudavel} 
    /* 
    escrevendo o obj dessa forma o javascript ja intente que é um obj e stancia a chave automaticamente
    ao envez de segur o pradrao?
   return{ comprarSorvete: comprarSorvete,comparTv50:  comparTv50, comprarTv32 : comprarTv32,manterSaudavel: manterSaudavel}

    */
}

console.log(compras(true, true))

console.log(compras(true, false))

console.log(compras(false, true))

console.log(compras(false, false))