function solve(arrInfo) {

    class Flight {
        constructor(flightNumber, destination) {
            this.flightNumber = flightNumber;
            this.Destination = destination;
            this.Status = 'Ready to fly';
        }
    }


    // Logging all flights as 'Ready to fly' by default.
    let flightsLog = [];
    for (const iterator of arrInfo[0]) {
        brokenDownLine = iterator.split(' ');

        let flightNumber = brokenDownLine[0];
        let destination = brokenDownLine.slice(1, brokenDownLine.length).join(' ');

        flightsLog.push(new Flight(flightNumber, destination));
    }

    // Canceling flights.
    for (const iterator of arrInfo[1]) {
        let [flightNumber, status] = iterator.split(' ');

        let curr = flightsLog.find(x => x.flightNumber == flightNumber);
        if (curr != undefined) {
            // curr.status = 'Cancelled';
            curr.Status = status;
        }
    }

    // Printing result.
    for (const iterator of arrInfo[0]) {
        let flightNumber = iterator.split(' ')[0];

        let curr = flightsLog.find(x => x.flightNumber == flightNumber);
        if (curr.Status == arrInfo[2][0]) {
            console.log(`{ Destination: '${curr.Destination}', Status: '${curr.Status}' }`);
        }
    }
}



// solve([
//     [
//         'WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     [
//         'DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'
//     ],
//     ['Cancelled']
// ]);

solve([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    ['Ready to fly']
]);
