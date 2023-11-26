function solve(arrInfo) {
    for (const item of arrInfo) {
        let [town, latitude, longitude] = item.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        const temp = {
            town,
            latitude,
            longitude,
        }
        console.log(temp);

    }
}


solve([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625',
]);

solve([
    'Plovdiv | 136.45 | 812.575',
]);


// // Not what Judge wants.
// function solve(arrInfo) {
//     class City {
//         constructor(town, latitude, longitude) {
//             this.town = town;
//             this.latitude = latitude;
//             this.longitude = longitude;
//         }
//     }

//     for (const item of arrInfo) {
//         let [city, latitude, longitude] = item.split(' | ');
//         latitude = Number(latitude).toFixed(2);
//         longitude = Number(longitude).toFixed(2);
//         console.log(new City(city, latitude, longitude));

//     }
// }
