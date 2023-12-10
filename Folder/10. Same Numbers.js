function solve(num) {
    let result = 0;
    numString = num.toString()
    let check = true;

    for (let i = 0; i < numString.length; i++) {
        result += parseInt(numString[i]);
        
        if (numString[i] != numString[0]) {
            check = false;
        }
    }

    console.log(check);
    console.log(result);   
}




solve(2213222)
solve(2222222)
solve(1234)