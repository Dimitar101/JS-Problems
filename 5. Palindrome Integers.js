// function solve(array) {
//     const len = array.length;
//     for (let i = 0; i < len; i++) {
//         const element = array[i].toString().split('');
//         const leftToRight = element.join('');
//         const reversed = element.reverse().join('');

//         leftToRight == reversed ? console.log(true) : console.log(false);
//     }
// }


function solve(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        const leftToRight = array[i].toString();
        const reversed = leftToRight.split('').reverse().join('');

        console.log(leftToRight == reversed);
    } 
}




solve([123, 323, 421, 121])
// solve([32, 2, 232, 1010])
