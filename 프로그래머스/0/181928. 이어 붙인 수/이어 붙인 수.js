function solution(num_list) {
    var answer = 0;
    let n = ''
    let k = ''
    for(let i = 0 ; i <= num_list.length-1 ; i++){
        if(num_list[i]%2==0){
            n += num_list[i]
        } else{
            k += num_list[i]
        }
    }
    return Number(n)+Number(k);
}