// function solve(startNum, endNum) {

    
//     function cal(arr) {
//         let sum = 0
//         arr.map(e => sum += e)
//         console.log(`Sum: ${sum}`);
//     }


//     let arr = [];

//     if (startNum < endNum) {
//         for (let i = startNum; i <= endNum; i++) {
//             arr.push(i);
//         }
//     } else if (startNum > endNum) {
//         for (let i = startNum; i >= endNum; i--) {
//             arr.push(i);
//         }
//     } else {
//         arr.push(startNum);
//     }

//     console.log(arr.join(' '));
//     cal(arr);
// }


// solve(5, 10);
// solve(0, 26);
// solve(50, 60);
// solve(5, 2);
// solve(5, 5);




function solve(startNum, endNum) {
    let result = 0;
    let arr = [];
    if (startNum < endNum) {
        for (let i = startNum; i <= endNum; i++) {
            arr.push(i);
            result += i;
        }
    } 
    console.log(arr.join(' '));
    console.log(`Sum: ${result}`);
}

// Judge has Checker: Trim - we could solve the problem with concatenation, without array.
solve(5, 10);
solve(0, 26);
solve(50, 60);