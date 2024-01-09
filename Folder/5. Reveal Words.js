function solve(keys, text) {
    for (const key of keys.split(', ')) {
        text = text.replace('*'.repeat(key.length), key);
    }
    console.log(text);
}


// solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')
