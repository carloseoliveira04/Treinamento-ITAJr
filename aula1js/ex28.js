function digitos(list, d) {
    var list2 = []
    for (let c = 0; c < list.length; c++) {
        if (Math.log10(list[c])<d && Math.log10(list[c])>=(d-1)) {
            list2.push(list[c])
        }
    }
    console.log(list2)
    return list2
}

digitos([2, 13, 144, 5, 564, 10, 23, 100], 0)