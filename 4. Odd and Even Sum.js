function solve(input) {
    input = input.toString();
    let sumEven = 0;
    let sumOdd = 0;

    let len = input.length;
    for (let i = 0; i < len; i++) {
        const element = Number(input[i]);
        (element % 2 === 0) ? sumEven += element : sumOdd += element;
    }
    console.log(` Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}




solve(1000435)
solve(3495892137259234)
