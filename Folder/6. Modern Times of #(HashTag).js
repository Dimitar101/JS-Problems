function solve(text) {
    const regexp = /#[A-Za-z]+(?=\W|$)/gm
    let matches = text.match(regexp);
    for (let word of matches) {
        word = word.replace('#', '');
        console.log(word);
    }
}



// solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('Nowadays everyone uses # to tag a #special word in #socialMedia an interesting #All_2-in-1, functionality learn about it in #functionality101 study')
// solve('The symbol # is known #variously in English-speaking #regions as the #number sign')
