function solution(food) {
    var answer = '';
    let n = []
    let k = []
    for(let i = 0 ; i < food.length ; i++){
        while(food[i]>=2){
            food[i] -= 2
            n.push(i)
            k.push(i)
        }
    }
    k.reverse()
    answer = n.join('')+'0'+k.join('')
    return answer;
}