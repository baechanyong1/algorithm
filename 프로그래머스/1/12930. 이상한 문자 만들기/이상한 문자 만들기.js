function solution(s) {
    var answer = '';
    let n = s.split('')
    let k = 0
    for(let i = 0 ; i < n.length ; i++){
        console.log(k)
        if(k%2==0 || k==0){
            k++
           answer += n[i].toUpperCase()
        } else {
            k++
            answer += n[i].toLowerCase()
        }
        if(n[i]==' ') k=0
    }
    return answer;
}