function solve(searchWord, text) {
    text = text.toLowerCase();
    let checkFound = text.split(' ').includes(searchWord);
    checkFound ? console.log(searchWord) : console.log(`${searchWord} not found!`);
}



solve('javascript', 'JavaScript is the best programming language')
solve('python', 'JavaScript is the best programming language')
