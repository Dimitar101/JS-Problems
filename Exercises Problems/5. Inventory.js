function solve(arr) {
    const players = [];

    for (const player of arr) {
        const [hero, level, items] = player.split(' / ');
        players.push({
            hero,
            level,
            items,
        });
    }

    players.sort((a, b) => a.level - b.level);

    for (const player of players) {
        console.log(`Hero: ${player.hero}`);
        console.log(`level => ${player.level}`);
        console.log(`items => ${player.items}`);
    }
}


// solve([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara',
// ]);

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara',
]);
