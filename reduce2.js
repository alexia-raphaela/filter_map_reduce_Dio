function saldoFinal(precos, saldo) {
    const total = precos.reduce((resultado, precos) => {
        return resultado + precos 
    }, 0);
    return `R$ ${(saldo - total).toString().replace('.', ',')}`
}
console.log(saldoFinal([2.00, 3.99, 4.50], 50))