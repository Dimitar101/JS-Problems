function solve(number) {
    let total = 0;
    let numberAsString = number.toString();

    for (const digit of numberAsString) {
        total += Number(digit);
    }

    if (total / numberAsString.length > 5) {
        console.log(number);    // OR console.log(numberAsString);
    } else {
        numberAsString += '9';
        total += 9;
        while (total / numberAsString.length <= 5) {
            numberAsString += '9';
            total += 9;
        }
        console.log(numberAsString);
    }
}


solve(101)
// solve(5835)
