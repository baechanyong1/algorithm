function solution(k, tangerine) {
    let count = {};

    for (let size of tangerine) {
        if (count[size]) {
            count[size]++;
        } else {
            count[size] = 1;
        }
    }
    
    let counts = Object.values(count).sort((a, b) => b - a);
    
    let kinds = 0;
    let selected = 0;
    for (let i = 0; i < counts.length; i++) {
        selected += counts[i];
        kinds++;
        if (selected >= k) {
            break;
        }
    }
    
    return kinds;
}
