function solve(yield) {
    let store = 0;
    let dayCounter = 0;

    while (yield >= 100) {
        store += yield;
        store -= 26;
        yield -= 10;
        dayCounter += 1;
    }

    if (store >= 26) {
        store -= 26;
    }

    console.log(dayCounter);
    console.log(store);
}



// solve(111)
solve(450)
// solve(99)