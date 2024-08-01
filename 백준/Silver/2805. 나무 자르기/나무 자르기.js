let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
let tree = input[1].split(' ').map(Number)

let start = 0
let end = tree.reduce((a,b)=>Math.max(a,b))

let result = 0
while(start<=end){
    let mid = parseInt((start+end)/2)
    let tot = 0
    for(x of tree)if(x>mid) tot += x-mid
    if(tot<k)end=mid-1
    else{
        result = mid
        start = mid+1
    }
}
console.log(result)