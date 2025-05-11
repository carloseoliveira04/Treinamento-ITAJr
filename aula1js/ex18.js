function despesasTotais(array) {
    var sum = 0
    for (let c = 0; c < array.length; c++) {
        sum += array[c].preco
    }
    console.log(sum)
    return sum
}

despesasTotais([{nome: 'boleto', preco: 130}, {nome:'lavanderia', preco: 140}, {nome:'frances', preco: 340}])