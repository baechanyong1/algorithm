function solution(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    
    var answer = 0;
    let prev1 = 2 
    let prev2 = 1
    let j = 1234567
    
    for(let i = 3 ; i <= n ; i++){
        answer = ( prev1 + prev2 ) % j
        prev2= prev1
        prev1= answer
    }
    return answer;
}