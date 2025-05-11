function receberPares(list) {
    var list2=[]
    for (let c = 0; c < list.length; c++) {
        if (c%2==0 && list[c]%2==0){
            list2.push(list[c])
        }
    }
    console.log(list2)
    return list2
}

receberPares([2, 5, 6, 8, 1, 12])