function contarCaractere(c, frase) {
    count = 0
    pos = frase.indexOf(c)
    while (pos != -1) {
        count++
        pos = frase.indexOf(c, pos+1)
    }
    console.log(count)
    return count
}


contarCaractere('e', "A sorte favorece os audazes")