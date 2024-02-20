function validityChecker(inputArray) {
    const [x1, y1, x2, y2] = [...inputArray];

    function checkDistance(n1, m1, n2, m2) {
        let distance = Math.sqrt( Math.pow((n2 - n1), 2) + Math.pow((m2 - m1), 2) );
        return Number.isInteger(distance);
    }


    function validity(tOrF) {
        if (tOrF) {
            return 'valid';
        }
        return 'invalid';
    }


    console.log(`{${x1}, ${y1}} to {0, 0} is ${validity(checkDistance(x1, y1, 0, 0))}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${validity(checkDistance(x2, y2, 0, 0))}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validity(checkDistance(x1, y1, x2, y2))}`);
}


// validityChecker([3, 0, 0, 4])
validityChecker([2, 1, 1, 1])
