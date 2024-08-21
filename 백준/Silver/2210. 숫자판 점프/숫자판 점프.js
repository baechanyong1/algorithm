let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = 5

let graph = []
let answer = 0
for(let i = 0 ; i < n ; i++){
    graph.push(input[i].split(' ').map(Number))
}

answer = new Set()

for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < n ; j++){
        dfs(i,j,"",0)
    }
}

console.log(answer.size)

function dfs(i, j, curr, depth){
    if (i < 0 || i >= n || j < 0 || j >= n) return;
    curr += graph[i][j]
    if(depth === 5) {
        answer.add(curr)
        return
    }
    dfs(i-1, j, curr, depth+1)
    dfs(i+1, j, curr, depth+1)
    dfs(i, j-1, curr, depth+1)
    dfs(i, j+1, curr, depth+1)
}

