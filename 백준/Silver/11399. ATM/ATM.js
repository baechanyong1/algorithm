let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number).sort((a,b)=>a-b)

let cnt = 0
let summary = 0
for(i=0;i<=n-1;i++){
    cnt +=arr[i]
    summary += cnt
}
console.log(summary)
