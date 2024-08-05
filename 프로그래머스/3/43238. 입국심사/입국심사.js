function solution(n, times) {
    let start = 1
    let end = Math.max(...times) * n;
    let result = end
    
    while(start <= end){
        let mid = parseInt((start+end) / 2)
        let tot = 0
        for(x of times){
            tot += parseInt(mid/x)
        }
        if(tot >= n){
           result = mid
           end = mid-1
           }
        else start = mid+1
    }
    return result;
}