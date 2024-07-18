function solution(prices) {
    var answer = new Array(prices.length).fill(0);
    let arr = []
    
    for(let i = 0 ; i < prices.length ; i++){
        while(arr.length > 0 && prices[arr[arr.length-1]]>prices[i]){
            let top = arr.pop()
            answer[top] = i - top
    }
    arr.push(i)
    }
    
    while(arr.length>0){
        let top = arr.pop()
        answer[top] = prices.length -1 -top
    }
    return answer;
}