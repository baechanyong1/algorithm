let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let price = parseInt(input[0])
let n = 1000-price
let cnt = 0

while(n>0){
    if(n>=500){
        cnt ++
        n -= 500
    }
    else if(n>=100){
        cnt ++
        n -= 100
    }
    else if(n>=50){
        cnt ++
        n -= 50
    }
    else if(n>=10){
        cnt ++
        n -= 10
    }
    else if(n>=5){
        cnt ++
        n -= 5
    }
    else if(n>=1){
        cnt += n
        n = 0
    }
}
console.log(cnt)
