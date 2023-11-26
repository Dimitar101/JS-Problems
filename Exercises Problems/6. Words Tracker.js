function solve(array) {
    const wordsTracker = {};
    const searchWordList = array.shift().split(' ');

    for (const searchWord of searchWordList) {
        for (const wordInWordPool of array) {
            if (searchWord == wordInWordPool) {
                !wordsTracker.hasOwnProperty(searchWord) ? wordsTracker[searchWord] = 1 : wordsTracker[searchWord] += 1;
            }
        }

        // Edge case check - what if the searched word is not at all present in the pool.
        if (!wordsTracker.hasOwnProperty(searchWord)) { wordsTracker[searchWord] = 0 }
    }

    const sortedWordsTracker = Object.entries(wordsTracker).sort((a, b) => Number(b[1]) - Number(a[1]));
    for (const [searchWord, count] of sortedWordsTracker) {
        console.log(`${searchWord} - ${count}`);
    }
}


// solve([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]);

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);

// solve(['aaa bbb', 'a', 'b']);
