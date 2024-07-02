function solution(n) {
    let k = Math.sqrt(n)
    if(Number.isInteger(k)){
        return parseInt(Math.pow(k+1,2))
    } else {
        return -1
    }
}