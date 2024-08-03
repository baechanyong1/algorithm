let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

arr.reverse()

let k = [0]
for(x of arr){
    if(k[k.length-1] < x){
        k.push(x)
    }
    else{
        let index = lower(k, x, 0, k.length)
        k[index] = x
    }
}
console.log(n - (k.length-1))

function lower(arr, target, start, end){
    while(start < end){
        let mid = parseInt((start+end)/2)
        if(arr[mid] >= target) end = mid
        else start = mid+1
    }
    return end
}