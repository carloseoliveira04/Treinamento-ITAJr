function segundoMaior(array) {
    function compararNumeros(a, b) {
        return a-b
    }
    array.sort(compararNumeros)
    n = array[array.length-2]
    console.log(n)
    return n
}

segundoMaior([2, 47, 12, 44, 5])