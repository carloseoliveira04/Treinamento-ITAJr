function soma(list) {
    var sum = 0
    for (let c = 0; c < list.length; c++) {
        sum += list[c]
    }
    console.log(sum)
    return sum
}

soma([1, 4, 5, 2, 22])