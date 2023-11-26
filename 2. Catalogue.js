function solve(infoArr) {
    infoArr = infoArr.sort((a, b) => a.localeCompare(b));
    alreadyCatalogued = '';

    for (const productPrice of infoArr) {
        const firstLetter = productPrice[0];
        if (!alreadyCatalogued.includes(firstLetter)) {
            console.log(firstLetter);
            alreadyCatalogued += firstLetter;
        }
        const [product, price] = productPrice.split(' : ');
        console.log(`  ${product}: ${price}`);
    }
}


// solve([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10',
// ]);

solve([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59',
]);
