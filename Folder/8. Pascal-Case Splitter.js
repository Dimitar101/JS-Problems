// function solve(sentence) {
//     let temp = '';
//     let resultBascket = [];

//     for (let i = 0; i < sentence.length; i++) {
//         const letter = sentence[i];

//         if (letter == letter.toUpperCase()) {
//             resultBascket.push(temp);
//             temp = '';
//             temp += letter;
//         } else {
//             temp += letter;
//         }
//     }

//     resultBascket.push(temp);
//     resultBascket.shift();
//     console.log(resultBascket.join(', '));
// }




function solve(sentence) {
    let regexp = /[A-Z][a-z]*/g;
    let words = sentence.match(regexp);
    console.log(words.join(', '));
}

// function solve(sentence) {
//     console.log(sentence.match(/[A-Z][a-z]*/g).join(', '));
// }



solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
// solve('HoldTheDoor')
// solve('ThisIsSoAnnoyingToDo')