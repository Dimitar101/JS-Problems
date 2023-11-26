function solve(arrInfo) {
    const parkingLot = {};
    let carsStillInParking = [];

    for (let infoPair of arrInfo) {
        infoPair = infoPair.split(', ');
        const [inOrOut, car] = [infoPair[0], infoPair[1]];
        parkingLot[car] = inOrOut;
    }

    for (const check of Object.entries(parkingLot)) {
        const [car, inOrOut] = [check[0], check[1]];
        if (inOrOut === 'IN') {
            carsStillInParking.push(car)
        }
    }

    if (carsStillInParking.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        carsStillInParking = carsStillInParking.sort();
        for (const car of carsStillInParking) {
            console.log(car);
        }
        
    }
}


// solve([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA',
// ]);

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
]);
