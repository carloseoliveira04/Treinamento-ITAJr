function entre(num, min, max, inc) {
    if(inc==false || inc==undefined) {
        if (num>min && num<max) {
            console.log('true')
            return true
        } else {
            console.log('false')
            return false
        }
    } else {
        if (num>=min && num<=max) {
            console.log('true')
            return true
        } else {
            console.log('false')
            return false
        }
    }
}