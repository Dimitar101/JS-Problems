// function solve(password) {
//     let validCheck = true;

//     let passwordLength = password.length;
//     if (!(passwordLength >= 6 && passwordLength <= 10)) {
//         validCheck = false;
//         console.log('Password must be between 6 and 10 characters');
//     }

//     for (let i = 0; i < passwordLength; i++) {
//         const char = password[i];
//         const ASCII = char.charCodeAt();

//         if (ASCII <= 47 || (ASCII >= 58 && ASCII <= 64) || (ASCII >= 91 && ASCII <= 96) || ASCII >= 123) {
//             validCheck = false;
//             console.log('Password must consist only of letters and digits');
//             break;
//         }
//     }

//     let digitCounter = 0;
//     let dgitCheck = false;
//     for (let i = 0; i < passwordLength; i++) {
//         const char = password[i];
//         const ASCII = char.charCodeAt();

//         if (ASCII >= 48 && ASCII <= 57) {
//             digitCounter++;
//         }

//         if (digitCounter >= 2) {
//             dgitCheck = true;
//             break;
//         }
//     }

//     if (!dgitCheck) {
//         validCheck = false;
//         console.log('Password must have at least 2 digits');
//     }

//     if (validCheck) {
//         console.log('Password is valid');
//     }
// }




function solve(password) {
    let validCheck = true;


    let passwordLength = password.length;
    if (passwordLength < 6 || passwordLength > 10) {
        validCheck = false;
        console.log('Password must be between 6 and 10 characters');
    }


    const regexp = /^[a-zA-Z0-9]+$/g;
    let secondChecks = regexp.test(password);
    if (!secondChecks) {
        validCheck = false;
        console.log('Password must consist only of letters and digits');
    }


    let digitCounter = 0;
    for (const char of password) {
        if (!isNaN(char)) {
            digitCounter++
        }
    }
    if (digitCounter < 2) {
        validCheck = false;
        console.log('Password must have at least 2 digits');
    }


    if (validCheck) {
        console.log('Password is valid');
    }
}


// solve('logIn')
// solve('MyPass123')
// solve('Pa$s$s')
