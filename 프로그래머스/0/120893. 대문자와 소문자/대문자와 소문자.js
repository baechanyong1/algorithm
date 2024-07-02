function solution(my_string) {
    var answer = '';
    for(let i = 0; i<my_string.length; i++){
        if(/[a-z]/.test(my_string[i])){
            answer += my_string[i].toUpperCase()
        }
        else if(/[A-Z]/.test(my_string[i])){
            answer += my_string[i].toLowerCase()
        }
    }
    console.log(answer)
    return answer;
}

