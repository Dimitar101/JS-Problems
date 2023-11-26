function solve(arrInfo1, arrInfo2) {
    const storeProvision = {};

    function read(arrInfo) {
        const len = arrInfo.length / 2;
        for (let i = 0; i < len; i++) {
            const item = arrInfo.shift();
            const count = Number(arrInfo.shift());
            
            if (storeProvision[item] == undefined) {
                storeProvision[item] = count;
            } else {
                storeProvision[item] += count;
            }
        }
    }

    read(arrInfo1);
    read(arrInfo2);

    const total = Object.entries(storeProvision);
    for (const infoPair of total) {
        const [item, count] = [infoPair[0], infoPair[1]];
        console.log(item + ' -> ' + count);
    }
}
// // ALT result display
// for (const key in storeProvision) {
//     console.log(key + ' -> ' + storeProvision[key]);
// }


// solve(
//     ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'],
// );

solve(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'],
);
