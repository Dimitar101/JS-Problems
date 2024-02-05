function solve(n) {
    const row = new Array(n).fill(n).join(' ');
    for (let col = 0; col < n; col++) {
        console.log(row);
    }
}



solve(3)
solve(7)
solve(2)
