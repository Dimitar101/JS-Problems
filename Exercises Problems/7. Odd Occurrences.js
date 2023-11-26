function solve(strInfo) {
    const basketObj = {};
    const alreadyVisited = [];
    let result = '';

    for (let word of strInfo.split(' ')) {
        // You could use strInfo.toLowerCase() in the begining to transform all input instead of doing it word by word with word = word.toLowerCase()
        word = word.toLowerCase();
        basketObj[word] == undefined ? basketObj[word] = 1 : basketObj[word] += 1;
    }

    for (let word of strInfo.split(' ')) {
        word = word.toLowerCase();

        if (!alreadyVisited.includes(word) && basketObj[word] % 2 != 0) {
            result += word + ' ';
        }
        alreadyVisited.push(word);

    }

    console.log(result.trim());
}


// solve('Cake IS SWEET is Soft CAKE sweet Food');
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
