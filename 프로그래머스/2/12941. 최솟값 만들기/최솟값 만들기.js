function solution(A,B){
    var answer = 0;
    let sum = 0
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    for(let i = 0 ; i < A.length ; i++){
        sum += A[i]*B[i]
    }

    return sum;
}