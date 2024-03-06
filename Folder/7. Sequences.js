function solve(arrIN) {
    let newX = [];

    for (const iterator of arrIN) {
        let iParsed = JSON.parse(iterator);
        newX.push(iParsed.sort((a, b) => b - a));
    }

    newX.sort((a, b) => a.length - b.length);

    let alreadyLoged = [];
    for (const iterator of newX) {
        let curr = JSON.stringify(iterator);

        if (!alreadyLoged.includes(curr)) {
            console.log(transform(curr));
            alreadyLoged.push(curr);
        }
    }


    function transform(strX) {
        let rrr = '';
        for (const iterator of strX) {
            rrr += iterator;
            if (iterator == ',') {
                rrr += ' ';
            }
        }
        return rrr;
    }
}

solve(
    [
        "[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"
    ]
);

// solve(
//     [
//         "[7.14, 7.180, 7.339, 80.099]",
//         "[7.339, 80.0990, 7.140000, 7.18]",
//         "[7.339, 7.180, 7.14, 80.099]"
//     ]
// );
