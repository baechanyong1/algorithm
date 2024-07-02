function solution(cipher, code) {
    var answer = '';
    const result = cipher.split('')
    for(let i = 0; i<=result.length; i++){
        if(i%code==0 && i!==0){
            answer+=result[i-1]
        }
    }
    return answer;
}