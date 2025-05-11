function bissexto(n){
    if (n%4==0 && n%100!=0){
        console.log('true')
        return true
    } else if (n%400==0) {
        console.log('true')
        return true
    } else {
        console.log('false')
        return false
    }
}

bissexto(2500)