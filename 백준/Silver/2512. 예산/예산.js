let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)
let k = Number(input[2])

let start = 1
let end = arr.reduce((a,b)=>Math.max(a,b))

let result = 0
while(start<=end){
    let mid = parseInt((start+end)/2)
    let tot = 0
    for(x of arr){
        tot += Math.min(mid,x)
    }
    if(tot <= k){
        result = mid
        start = mid+1
    }
    else {
        end = mid-1
    }
}
console.log(result)