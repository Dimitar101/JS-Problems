function solve(array, step) {
    const resultBascket = [];
    const arrLen = array.length;

    for (let i = 0; i < arrLen; i += step) {
        resultBascket.push(array[i]);
        // console.log(array[i]);
    }
    return resultBascket;
}



console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2 ));
console.log(solve(['1', '2', '3', '4', '5'], 6));
