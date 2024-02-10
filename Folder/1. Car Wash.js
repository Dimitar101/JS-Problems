// function solve(arrayInput) {
//     let clean = 0;

//     for (const command of arrayInput) {
//         if (command == 'soap') {
//             clean += 10;
//         } else if (command == 'water') {
//             clean *= 1.20;
//         } else if (command == 'vacuum cleaner') {
//             clean *= 1.25;
//         } else if (command == 'mud') {
//             clean *= 0.90;
//         }
//     }
//     console.log(`The car is ${clean.toFixed(2)}% clean.`);
// }



function solve(arrayInput) {
    let clean = 0;

    const commands = {
        'soap': () => clean += 10,
        'water': () => clean *= 1.20,
        'vacuum cleaner': () => clean *= 1.25,
        'mud': () => clean *= 0.90,
    }

    for (const command of arrayInput) {
        commands[command]();
    }

    console.log(`The car is ${clean.toFixed(2)}% clean.`);
}


// solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
