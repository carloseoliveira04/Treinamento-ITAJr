function remover(objeto, prop){
    delete objeto.prop
    console.log(objeto)
    return objeto
}

remover({carro: 'Monza', cor: 'vermelho', rodas: 4, ano: 1980}, "Monza")