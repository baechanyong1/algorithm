function solution(n) {
    let prev1 = 1
    let prev2 = 0
    let cur = 0
    const j = 1234567
    
    for( let i = 2 ; i <= n ; i++){
        cur = (prev1 + prev2) % j
        prev2 = prev1
        prev1 = cur
    }
    return  cur
}