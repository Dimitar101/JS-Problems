function solve(num) {
    let loadingPercent = '%'.repeat(num / 10);
    let loadingLeft = '.'.repeat(10 - (num / 10));

    console.log(`${num}% [${loadingPercent}${loadingLeft}]`);
    num != 100 ? console.log('Still loading...') : console.log('100% Complete!');
}


// solve(30)
// solve(50)
solve(100)
// solve(0)