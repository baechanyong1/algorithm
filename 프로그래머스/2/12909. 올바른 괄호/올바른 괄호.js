function solution(s){
    var answer = true;
    let arr = [] 
    for(let i = 0 ; i < s.length ; i++){
        if(s[i]=='('){
            arr.push('(')
        } else if (s[i]===')'){
            if(arr.indexOf('(') !== -1){
                arr.pop()
        } else arr.push(-1)
    }
    }
    return arr.length === 0
}