


function solve(nameList) {
    nameList.sort((a, b) => {
        return a.localeCompare(b);
    });

    for (let i = 0; i < nameList.length; i++) {
        const name = nameList[i];
        console.log(`${i + 1}.${name}`);
    }
}


solve(["John", "Bob", "Christina", "Ema"]);
// solve(["John", "Bob", "Christina", "Emo", "Johana", "Ema"]);





