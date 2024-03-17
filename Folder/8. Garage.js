function solve(arrInfo) {

    class Garage {
        constructor(garageNum) {
            this.garageNum = garageNum;
            this.carsInfo = [];
        }
    }


    let garageLog = [];

    for (const iterator of arrInfo) {
        let [garageNum, carInfo] = iterator.split(' - ');
        garageNum = Number(garageNum);

        let curr = garageLog.find(x => x.garageNum == garageNum);
        if (curr) {
            curr.carsInfo.push(carInfo);
        } else {
            let newGarage = new Garage(garageNum)
            garageLog.push(newGarage);
            newGarage.carsInfo.push(carInfo);
        }
    }

    // garageLog.sort((a, b) => a.garageNum - b.garageNum);

    for (const garage of garageLog) {
        console.log(`Garage № ${garage.garageNum}`);
        for (const car of garage.carsInfo) {
            let temp = [];
            for (const iterator of car.split(', ')) {
                let [property, determiner] = iterator.split(': ');
                temp.push(property + ' - ' + determiner);
            }
            console.log(`--- ${temp.join(', ').trim()}`);
        }
    }
}


solve(
    [
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
        '1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi',
        '2 - fuel type: petrol',
    ]
);

// solve(
//     [
//         '1 - color: green, fuel type: petrol',
//         '1 - color: dark red, manufacture: WV',
//         '2 - fuel type: diesel',
//         '3 - color: dark blue, fuel type: petrol'
//     ]
// );


// function solve(arrInfo) {

//     class Garage {
//         constructor(garageNum) {
//             this.garageNum = garageNum;
//             this.carInfo = [];
//         }
//     }


//     let garageLog = [];
//     let garagesTaken = new Set();

//     for (const iterator of arrInfo) {
//         let [garageNum, carInfo] = iterator.split(' - ');

//         if (garagesTaken.has(garageNum)) {
//             let curr = garageLog.find(x => x.garageNum == garageNum);
//             curr.carInfo.push(carInfo);
//         } else {
//             let newGarage = new Garage(garageNum);
//             newGarage.carInfo.push(carInfo);
//             garageLog.push(newGarage);
//             garagesTaken.add(garageNum);
//         }
//     }

//     for (const garage of garageLog) {
//         console.log(`Garage № ${garage.garageNum}`);
//         for (const car of garage.carInfo) {
//             let temp = [];
//             for (const iterator of car.split(', ')) {
//                 let [property, determiner] = iterator.split(': ');
//                 temp.push(property + ' - ' + determiner);
//             }
//             console.log(`--- ${temp.join(', ').trim()}`);
//         }
//     }
// }