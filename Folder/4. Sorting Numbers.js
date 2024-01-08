// function solve(array) {
//     array.sort((a, b) => a - b);
//     const result = [];
//     const len = array.length;

//     for (let i = 0; i < len; i++) {
//         i % 2 == 0 ? result.push(array.shift()) : result.push(array.pop());
//     }
//     return result
// }




// function solve(array) {
//     array.sort((a, b) => a - b);

//     const result = [];
//     const len = array.length / 2;
//     const lenMod = array.length % 2;

//     for (let i = 0; i < len; i++) {
//         result.push(array.shift());
//         result.push(array.pop());
//     }
//     if (lenMod != 0) { result.pop() }   // pop undefined resulting in odd len arr
//     return result
// }




// function solve(array) {
//     array.sort((a, b) => a - b);

//     const result = [];
//     const len = array.length / 2;

//     for (let i = 0; i < len; i++) {
//         result.push(array.shift());
//         if (array.length == 0) { break }
//         result.push(array.pop());
//     }
//     return result
// }




function solve(array) {
    array.sort((a, b) => a - b);
    const result = [];
    const len = array.length;
    // const lenMod = array.length % 2;

    for (let i = 0, j = len - 1; i < len / 2; i++, j--) {
        result.push(array[i]);
        if (i == j) { break }   //
        result.push(array[j]);
    }
    // if (lenMod != 0) { result.pop() }
    return result
}




// console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// console.log(solve([25, 30, 20]));
// console.log(solve([66]));
