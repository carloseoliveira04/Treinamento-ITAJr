function inverso (n){
    if (typeof(n)=='boolean'){
        if (n==true){
            console.log('false')
            return false
        } else {
            console.log('true')
            return true
        }
    } else if (typeof(n)=='number') {
        console.log(n*(-1))
        return n*(-1)
    } else {
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof(n)}`)
        return typeof(n)
    }
}

inverso(false)