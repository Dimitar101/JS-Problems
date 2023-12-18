function solve(stringInput) {
    bascket = [];
    resultBascket = [];

    let knit = '';

    for (let i = 0; i < stringInput.length; i++) {
        const charecter = stringInput[i];
        const asciiValue = charecter.charCodeAt();
        
        let isItLetter = (97 <= asciiValue && asciiValue <= 122) ||     // small letters
                        (65 <= asciiValue && asciiValue <= 90) ||       // capital letters
                        (48 <= asciiValue && asciiValue <= 57);         // digits
        
        asciiValue == 39;
        
        if (isItLetter) {
            knit += charecter;
        } else {
            bascket.push(knit);
            knit = '';
        }
    }
    bascket.push(knit);

    bascket.forEach(wordesque => {
        if (wordesque != '') {
            resultBascket.push(wordesque.toUpperCase());
        }
    });

    console.log(resultBascket.join(', '));
}




// solve('Hi, how are you?')
solve('hello')
// solve('Functions in JS can be nested, i.e. hold other functions')
// solve('one two three four five')
// solve('one. . *two three-four five')
// solve('hello.')
// solve('the may-bes hello.')
// solve("it's the day")
solve("NODE, JS, IS, AN, OPEN, SOURCE, USE, GOOGLE, S, V8, JAVASCRIPT, ENGINE")
