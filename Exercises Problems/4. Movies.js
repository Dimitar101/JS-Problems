// // Bad problem description causes me to make this solution which then it gets 66/100 in Judge.
// function solve(infoArray) {
//     const movies = {};
//     const result = [];


//     for (const instruction of infoArray) {
//         if (instruction.includes('addMovie')) {
//             let movie = instruction.split('addMovie ')[1];
//             if (movies[movie] == undefined) {
//                 movies[movie] = [`name: ${movie}`];
//             } else {
//                 movies[movie].push(`name: ${movie}`)
//             }
//         }
//         else if (instruction.includes('directedBy')) {
//             let [movie, director] = instruction.split(' directedBy ');
//             if (movies[movie] == undefined) {
//                 movies[movie] = [`director: ${director}`];
//             } else {
//                 movies[movie].push(`director: ${director}`)
//             }
//         }
//         else if (instruction.includes('onDate')) {
//             let [movie, date] = instruction.split(' onDate ');
//             if (movies[movie] == undefined) {
//                 movies[movie] = [`date: ${date}`];
//             } else {
//                 movies[movie].push(`date: ${date}`)
//             }
//         }
//     }


//     for (const value of Object.values(movies)) {
//         if (value.length == 3) {
//             // let temp = { name: 0, date: 0, director: 0 };
//             let temp = {};
//             for (const iterator of value) {
//                 let [field, info] = iterator.split(': ');
//                 temp[field] = info;
//             }
//             result.push(temp);
//         }
//     }


//     for (const iterator of result) {
//         console.log(JSON.stringify(iterator));
//     }
// }


function solve(infoArray) {
    const movies = {};

    for (const instruction of infoArray) {
        if (instruction.includes('addMovie')) {
            let movie = instruction.split('addMovie ')[1];
            movies[movie] = { name: movie };
        }
        else if (instruction.includes('directedBy')) {
            let [movie, director] = instruction.split(' directedBy ');
            if (movies[movie] != undefined) {
                movies[movie]['director'] = director;
            }
        }
        else if (instruction.includes('onDate')) {
            let [movie, date] = instruction.split(' onDate ');
            if (movies[movie] != undefined) {
                movies[movie]['date'] = date;
            }
        }
    }

    for (const el of Object.entries(movies)) {
        let objYorN =el[1];
        if (Object.entries(objYorN).length === 3) {
            console.log(JSON.stringify(objYorN));
        }
    }
}


// solve([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo',
// ]);

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);
