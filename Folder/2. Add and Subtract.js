function solve(num1, num2, num3) {

    function sum(x, y) {
        return x + y
    }

    function subtract() {
        return sum(num1, num2) - num3
    }

    return subtract()
}


console.log(solve(23, 6, 10));
console.log(solve(1, 17, 30));
console.log(solve(42, 58, 100));
