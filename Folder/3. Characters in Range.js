function solve(char1, char2) {
    let result = [];
    let code1 = char1.charCodeAt(); let code2 = char2.charCodeAt();
    let small; let big;
    code1 <= code2 ? [small, big] = [code1, code2] : [small, big] = [code2, code1];

    for (let i = small + 1; i < big; i++) {
        result.push(String.fromCharCode(i));
    }
    console.log(result.join(' '));
}


// function solve(char1, char2) {
//     let result = '';
//     let big = Math.max(char1.charCodeAt(), char2.charCodeAt());
//     let small = Math.min(char1.charCodeAt(), char2.charCodeAt());

//     for (let i = small + 1; i < big; i++) {
//         result += String.fromCharCode(i) + ' ';
//     }
//     console.log(result.trimEnd());
// }


solve('a', 'd')
solve('#', ':')
solve('C', '#')
