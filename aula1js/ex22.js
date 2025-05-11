function sorte(n) {
    s = Math.floor(Math.random() * 10 + 1)
    if (n == s) {
        console.log(`Parabéns! O número sorteado foi o ${s}`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${s}`)
    }
    return s
}

sorte(4)