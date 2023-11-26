function solve(infoArr) {
    let infoObj = {}    // SoftUni asks us to do an Obj for practice, OFC it can be solved with just for-loop
    for (const person of infoArr) {
        infoObj[person] = person.length
    }

    for (const entry of Object.entries(infoObj)) {
        const [name, PIN] = entry;
        console.log(`Name: ${name} -- Personal Number: ${PIN}`);
    }
}

// solve([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ])

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])
