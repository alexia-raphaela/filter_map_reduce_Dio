const produto = {
    nome: 'geladeira',
    preco: 3000.00
}
function faturamentoPorVenda() {
    const vendas = [8, 1, 2, 3]
    return vendas.map(function(quantidade) {
        return quantidade * this.preco
    }, produto);
}

console.log(faturamentoPorVenda())