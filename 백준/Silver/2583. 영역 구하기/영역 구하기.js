let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [m, n, k] = input[0].split(' ').map(Number)
let graph = Array.from(Array(m), ()=> Array(n).fill(0))

for(let i = 1 ; i <= k ; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            graph[y][x] = 1;
        }
    }
}

let answer = []
for(let i = 0 ; i < m ; i++){
    for(let j = 0 ; j < n ; j++){
        if (graph[i][j] === 0) {
            let cnt = dfs(i, j);
            answer.push(cnt);
        }
    }
}
answer.sort((a,b)=>a-b)
console.log(answer.length+'\n'+answer.join(' '))

function dfs(x,y){
    if(x < 0 || x >= m || y < 0 || y >= n || graph[x][y] !== 0) return 0
    graph[x][y] = -1; 
    let area = 1;
    
    area += dfs(x - 1, y);
    area += dfs(x + 1, y);
    area += dfs(x, y - 1);
    area += dfs(x, y + 1);
    
    return area;
}