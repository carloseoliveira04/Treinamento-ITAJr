function filtrar(list) {
    let list2 = []
    for (let c = 0; c < list.length; c++) {
        if ((typeof(list[c]))=='number'){
            list2.push(list[c])
        }
    }
    console.log(list2)
    return list2
}

filtrar([4, 'manga', 7, true, '5', 'trompete'])