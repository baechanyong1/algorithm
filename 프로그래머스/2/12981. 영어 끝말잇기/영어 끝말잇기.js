function solution(n, words) {
    let answer = [0, 0];
    let used = new Set()
    let cnt = 0
    
    used.add(words[0])
    
    while (cnt < words.length-1) {
        let prev = words[cnt]
        let curr = words[cnt+1]
        if (used.has(curr) || prev[prev.length - 1] !== curr[0]) {
            let i = (cnt+1) % n;
            let j = Math.floor((cnt+1) / n);
            answer = [i + 1, j + 1];
            break;
        }
        used.add(curr)
        cnt++;
    }
    
    return answer;
}