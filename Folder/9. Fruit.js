function solve(fruit, weightGrams, priceKg) {
    let weightKg = weightGrams / 1000;
    let priceTotal = weightKg * priceKg;

    console.log(`I need $${priceTotal.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}



solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)