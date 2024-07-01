let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = input[0]
let dist = input[1].split(' ').map(Number)
let cost = input[2].split(' ').map(Number)

let minCost = cost[0]
for(let i = 1; i < n ; i++){
    minCost = Math.min(minCost, cost[i])
    cost[i] = minCost
}

let sum = 0
for(let i = 0; i < n-1 ; i++){
    sum += cost[i] * dist[i]
}
console.log(sum)