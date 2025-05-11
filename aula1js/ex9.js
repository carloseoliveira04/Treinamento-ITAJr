function repetir(r, n) {
    const list = []
    for (let c = 0; c < n; c++){
        list.push(r)
    }
    console.log(list)
    return list
}

repetir(9, 5)