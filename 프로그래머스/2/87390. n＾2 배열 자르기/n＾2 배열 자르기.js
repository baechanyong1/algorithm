function solution(n, left, right) {
    var answer = [];
    for(let i = left ; i <= right ; i++){
        let z = Math.floor(i/n)
        let x = i%n
        let num = Math.max(z+1, x+1);
        answer.push(num)
    }
    return answer;
}