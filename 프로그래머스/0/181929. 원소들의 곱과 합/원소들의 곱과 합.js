function solution(num_list) {
    let n = 0
    let k = 1
    for(let i = 0 ; i <= num_list.length-1 ; i++){
        n += num_list[i]
        k *= num_list[i]
    }
    n **=2
    if(n<k){
        return 0
    }else{
        return 1
    }
}