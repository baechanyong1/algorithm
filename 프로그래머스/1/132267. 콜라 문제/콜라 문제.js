function solution(a, b, n) {
    var answer = 0;
    while(n>=a){
        n -= a
        answer += b
        n += b
    }
    return answer;
}