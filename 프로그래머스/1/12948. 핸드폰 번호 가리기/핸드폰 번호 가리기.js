function solution(phone_number) {
    var answer = '*'.repeat(phone_number.length-4) + phone_number.slice(phone_number.length-4)
    return answer;
}