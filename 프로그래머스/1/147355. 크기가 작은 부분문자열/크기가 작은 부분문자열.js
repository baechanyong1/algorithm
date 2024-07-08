function solution(t, p) {
    var answer = 0;
    for(let i = 0; i <= t.length-p.length ; i++){
        let sum = ''
        for( let j = 0 ; j < p.length ; j++){
            sum += t[i+j]
            if(sum<=p && sum.length==p.length){
                answer++
            }
        }
    }

    return answer;
}