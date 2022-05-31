const produto = {nome: 'geladeira', preco: 3000.00}

function faturamentoPorVenda(produto) {
    const vendas = [8, 1, 2, 3]
    return vendas.map(function(quantidade) {
        return quantidade * produto.preco
    }, produto);
} 
console.log(faturamentoPorVenda(produto))