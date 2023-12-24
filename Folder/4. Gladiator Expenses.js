function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    helmetExpenses = parseInt(lostFightsCount / 2) * helmetPrice;
    swordExpenses = parseInt(lostFightsCount / 3) * swordPrice;
    shieldExpenses = parseInt(lostFightsCount / 6) * shieldPrice;
    armorExpenses = parseInt(lostFightsCount / 12) * armorPrice;

    let expenses = helmetExpenses + swordExpenses + shieldExpenses + armorExpenses;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}




// solve(7, 2, 3, 4, 5)
solve(23, 12.50, 21.50, 40, 200)
