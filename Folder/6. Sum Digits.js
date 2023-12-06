function solve(num) {
    let result = 0;
    numString = num.toString()

    for (let i = 0; i < numString.length; i++) {
        // result += parseInt(numString[i]);
        result += Number(numString[i]);
    }

    console.log(result);   
}




solve(97561)