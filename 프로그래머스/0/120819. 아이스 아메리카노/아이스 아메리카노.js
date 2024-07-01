function solution(money) {
    var answer = []
    var coffee = Math.floor(money/5500)
    var cost = money%5500
    answer.push(coffee,cost);
    return answer
}