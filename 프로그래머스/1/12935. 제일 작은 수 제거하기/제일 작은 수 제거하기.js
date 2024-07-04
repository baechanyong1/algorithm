function solution(arr) {
    let answer = arr
    let n = Math.min(...arr)
    let index = arr.indexOf(n)
    arr.splice(index,1)
    if(arr.length===0) return [-1]
    return arr;
}