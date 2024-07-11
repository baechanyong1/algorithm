function solution(s) {
    var answer = '';
    let arr = s.split(' ').map(Number)
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return min+' '+max;
}