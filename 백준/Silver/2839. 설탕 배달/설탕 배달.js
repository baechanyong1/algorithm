let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = input[0]
let k = false

let cnt = 0
while(n>=0){
      if(n==0||n%5==0){
          cnt += parseInt(n/5)
          console.log(cnt)
          k = true
          break
      }
    n -= 3
    cnt++
      }if(k==false){
          console.log(-1)
      }