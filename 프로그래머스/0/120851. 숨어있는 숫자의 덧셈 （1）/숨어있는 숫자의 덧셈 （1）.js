function solution(my_string) {
    var answer = 0;
    var arr = my_string.replace(/[^0-9]/g,'').split('').map(Number)
    for(let i =0;i<arr.length;i++){
        answer += arr[i]
    }
    return answer;
}