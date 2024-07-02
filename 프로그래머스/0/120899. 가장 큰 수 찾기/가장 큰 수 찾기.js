function solution(array) {
    var answer = [];
    let n = array.length
    let array2 = [...array].sort((a,b)=>a-b)
    let k = array2[n - 1]
    answer = [k,array.indexOf(k)]
    return answer;
}
