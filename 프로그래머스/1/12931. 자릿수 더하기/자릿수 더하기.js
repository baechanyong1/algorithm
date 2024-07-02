function solution(n){
    var answer = 0;
    let k = n.toString().split('').map(Number)
    for(let i = 0 ; i<=k.length-1 ; i++){
        answer += k[i]
    }
    return answer;
}