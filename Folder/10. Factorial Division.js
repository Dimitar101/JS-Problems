function solve(num1, num2) {

    function factorial(num) {
        if (num == 1) {
            return 1
        } else {
            return num * factorial(num - 1)
        }
    }

    let toLogOnConsole = factorial(num1) / factorial(num2);
    console.log(toLogOnConsole.toFixed(2));
}



solve(5, 2)
solve(6, 2)