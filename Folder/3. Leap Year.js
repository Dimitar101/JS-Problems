// function checkLeap(year) {
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         console.log('yes');
//     } else {
//         console.log('no');
//     }
// }




// function checkLeap(year) {
//     let date = new Date(year, 1, 29);
//     date = date.toString();
//     if (date[8] + date[9] == 29) {
//         console.log('yes');
//     } else {
//         console.log('no');
//     }
// }




function checkLeap(year) {
    let testDate = new Date(year, 1, 29).getDate();

    if (testDate == 29) {
        console.log('yes');
    } else {
        console.log('no');
    }
}



checkLeap(1984)
checkLeap(2003)
checkLeap(4)