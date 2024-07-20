function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0 ; i < arr1.length ; i++){
        let arr = []
        for(let j = 0 ; j < arr2[0].length ; j++){
            let sum = 0
            for(let n = 0 ; n < arr1[0].length ; n++){
                sum += arr1[i][n] * arr2[n][j]
            }
            arr.push(sum)
        }
        answer.push(arr)
    }
    return answer;
}