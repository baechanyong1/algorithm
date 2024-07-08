process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let row = '*'.repeat(a)
    let answer = Array(b).fill(row).join('\n')
    console.log(answer)
});
