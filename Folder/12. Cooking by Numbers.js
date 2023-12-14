// function solve(num, oper1, oper2, oper3, oper4, oper5) {
//     num = parseInt(num)

//     let operators = [oper1, oper2, oper3, oper4, oper5];
//     operators.forEach(oper => {
//         if (oper == 'chop') {
//             num = num / 2;
//         } else if (oper == 'dice') {
//             num = Math.sqrt(num);
//         } else if (oper == 'spice') {
//             num = num + 1;
//         } else if (oper == 'bake') {
//             num = num * 3;
//         } else if (oper == 'fillet') {
//             num = num - (num * 0.20);
//         }
//         console.log(num);
//     });
// }





function solve(num, oper1, oper2, oper3, oper4, oper5) {
    num = Number(num);
    let operation = {
        'chop': (n) => n / 2,
        'dice': (n) => Math.sqrt(n),
        'spice': (n) => n + 1,
        'bake': (n) => n * 3,
        'fillet': (n) => n - (n * 0.20),
    };

    let allOperations = [oper1, oper2, oper3, oper4, oper5];
    allOperations.forEach(oper => {
        num = operation[oper](num);
        console.log(num);
    }); 
}



// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
