function solution(want, number, discount) {
    let answer = 0;
    
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    const currentMap = new Map();
    for (let i = 0; i < 10; i++) {
        currentMap.set(discount[i], (currentMap.get(discount[i]) || 0) + 1);
    }

    const checkWant = () => {
        for (let [product, qty] of wantMap) {
            if ((currentMap.get(product) || 0) < qty) {
                return false;
            }
        }
        return true;
    };

    if (checkWant()) {
        answer++;
    }

    for (let i = 10; i < discount.length; i++) {
        const prevProduct = discount[i - 10];
        currentMap.set(prevProduct, currentMap.get(prevProduct) - 1);

        const newProduct = discount[i];
        currentMap.set(newProduct, (currentMap.get(newProduct) || 0) + 1);

        if (checkWant()) {
            answer++;
        }
    }

    return answer;
}