function mult(n1, n2){
    const n1i = n1
    if (n1==0 || n2==0){
        console.log(0)
        return 0
    } else {
        for (let c = 1; c < n2; c++) {
            n1 +=n1i
        }
        console.log(n1)
        return n1
    }
}