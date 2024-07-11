function solution(s) {
    var answer = '';
    let arr = s.split('')
    for(let i = 0 ; i < arr.length ; i++){
        if(s[i-1]==' ' || i==0){
           answer += arr[i].toUpperCase()
        } else {
            answer += arr[i].toLowerCase()
        }
    }
    return answer;
}