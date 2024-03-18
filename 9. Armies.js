function solve(arrInfo) {

    class Leader {
        constructor(leaderName) {
            this.leaderName = leaderName;
            this.armiesLog = [];
            this.totalArmyCount = 0;
        }
    }

    class Army {
        constructor(armyName, armyCount) {
            this.armyName = armyName;
            this.armyCount = armyCount;
        }
    }

    let gameLog = [];


    for (const iterator of arrInfo) {
        if (iterator.includes('arrives')) {
            let name = iterator.split(' arrives')[0];
            gameLog.push(new Leader(name));
        }
        else if (iterator.includes(',')) {
            let currLeader = iterator.split(':')[0];
            let [currArmy, currArmyCount] = iterator.split(': ')[1].split(', ');
            currArmyCount = Number(currArmyCount);

            let curr = gameLog.find(x => x.leaderName == currLeader);
            if (curr) {
                curr.armiesLog.push(new Army(currArmy, currArmyCount));
                curr.totalArmyCount += currArmyCount;
            }
        }
        else if (iterator.includes('+')) {
            let [currArmy, currArmyCount] = iterator.split(' + ');
            currArmyCount = Number(currArmyCount);

            let obj = gameLog.find(x => x.armiesLog.find(y => y.armyName == currArmy));
            if (obj) {
                let curr = obj.armiesLog.find(x => x.armyName == currArmy);
                curr.armyCount += currArmyCount;
                obj.totalArmyCount += currArmyCount;
            }
        }
        else if (iterator.includes('defeated')) {
            let currLeader = iterator.split(' defeated')[0];
            let curr = gameLog.find(x => x.leaderName == currLeader);
            if (curr) {
                let idx = gameLog.indexOf(curr)
                gameLog.splice(idx, 1);
            }
        }
    }


    gameLog.sort(((a, b) => b.totalArmyCount - a.totalArmyCount));
    for (const iterator of gameLog) {
        console.log(`${iterator.leaderName}: ${iterator.totalArmyCount}`);
        iterator.armiesLog.sort((a, b) => b.armyCount - a.armyCount);

        for (const i of iterator.armiesLog) {
            console.log(`>>> ${i.armyName} - ${i.armyCount}`);
        }
    }
}


// solve(
//     [
//         'Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'
//     ]
// );

solve(
    [
        'Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'
    ]
);
