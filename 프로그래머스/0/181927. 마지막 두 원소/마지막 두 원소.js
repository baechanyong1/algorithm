function solution(num_list) {
    var answer = [];
    let n = num_list[num_list.length-1]
    let k = num_list[num_list.length-2]
    if(n>k){
        num_list.push(n-k)
    }
    else {
        num_list.push(2*n)
    }
    return num_list;
}
