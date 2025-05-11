function media(list){
    var sum = 0
    for (let c = 0; c < list.length; c++) {
        sum += list[c]
    }
    var m = sum/list.length
    console.log(m)
    return m
}

media([-1, 8, 8])