function buscarSemelhantes(palavra, array) {
    semelhantes = []
    for (let c = 0; c < array.length; c++) {
        if (array[c].includes(palavra) == true) {
            semelhantes.push(array[c])
        }
    }
    console.log(semelhantes)
    return semelhantes
}

buscarSemelhantes("pro", ["programação", "mobile", "profissional", "programa"])