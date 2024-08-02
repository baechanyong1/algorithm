let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr1 = input[1].split(' ').map(Number)

let m = Number(input[2])
let arr2 = input[3].split(' ').map(Number)

arr1.sort((a,b)=>a-b)
let answer = ''
for(let i = 0 ; i < m ; i++){
    let cnt = count(arr1, arr2[i], arr2[i])
    answer += cnt + ' '
}
console.log(answer)

function lower(arr, target, start, end){
    while(start < end){
        let mid = parseInt((start+end)/2)
        if(arr[mid] >= target) end = mid
        else start = mid+1
    }
    return end
}

function upper(arr, target, start, end){
    while(start < end){
        let mid = parseInt((start+end)/2)
        if(arr[mid] > target) end = mid
        else start = mid+1
    }
    return end
}

function count(arr, left, right){
    let rightIndex = upper(arr, right, 0, arr.length)
    let leftIndex = lower(arr, right, 0, arr.length)
    return rightIndex - leftIndex
}